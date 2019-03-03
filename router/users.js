// @login & @register
const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/users");

router.get('/test', (req, res) => {
   res.json({
       msg: 'login works'
   })
});

// 注册
router.post("/register", (req,res) => {
    console.log(req.body);

    User.findOne({email: req.body.email})
        .then(user => {
            if(user) {
                return res.status(400).json({email: "邮箱已被注册!"})
            }else {
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });

                newUser.save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
            }
        })
});

module.exports = router;