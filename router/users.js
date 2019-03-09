// @login & @register
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const keys = require("../config");
const passport = require("passport");

console.log(passport);

const User = require("../models/users");

router.get('/test', (req, res) => {
   res.json({
       msg: 'login works'
   })
});

// 注册接口
router.post("/register", (req,res) => {
    // console.log(req.body);
    User.findOne({email: req.body.email})
        .then(user => {
            if(user) {
                return res.status(500).json({email: "邮箱已被注册!"})
            }else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    identity: req.body.identity
                });
                // let salt = bcrypt.genSaltSync(10);
                // let hash = bcrypt.hashSync(newUser.password, salt);
                bcrypt.genSalt(10, (err, salt) => {
                   if (err) throw err;
                   bcrypt.hash(newUser.password, salt, (err, hash) => {
                       newUser.password = hash;

                       newUser.save()
                           .then(user => res.json(
                               {
                                   errCode: 0,
                                   errMsg: "",
                                   user
                               }
                           ))
                           .catch(err => console.log(err));
                   })
                });
                // newUser.password = hash;
            }
        })
        .catch(err => console.error(err))
});

// 登陆接口: 获取Token
router.post("/login", (req, res) => {
    console.log(req.body);
    console.log("*****");
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email})
        .then(user => {
            if(!user) {
                return res.status(500).json({email: "此用户不存在"});
            }
            console.log(user);
            // 密码匹配
            let resp = bcrypt.compareSync(password, user.password);
            console.log(resp);
            if(!resp) {
                return res.status(500).json({msg: "密码不匹配"})
            }

            // 密码匹配时
            const rule = {id: user.id, name: user.name};
            jwt.sign(rule, keys.secretOrKey, {expiresIn: 3600}, (err, token) => {
                if(err) throw err;
                res.json({
                    errCode: "0",
                    errMsg: "",
                    token: "Bear " + token
                })
            })
        })
        .catch(err => console.log(err))
});

// 验证Token
router.get("/current", passport.authenticate("jwt", {session: false}), (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        identity: req.user.identity
    })
});

module.exports = router;