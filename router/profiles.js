const express = require("express");
const router = express.Router();
const passport = require("passport");

const Profile = require("../models/profiles");

router.get("/test", (req, res) => {
    res.json({
        msg: "资金管理"
    })
});

router.post("/add", passport.authenticate('jwt', {session: false}), (req, res) => {
   const profileFields = {};
   if(req.body.type) profileFields.type = req.body.type;
   if(req.body.description) profileFields.description = req.body.description;
   if(req.body.income) profileFields.income = req.body.income;
   if(req.body.expense) profileFields.expense = req.body.expense;
   if(req.body.cash) profileFields.cash = req.body.cash;
   if(req.body.remark) profileFields.remark = req.body.remark;

   new Profile(profileFields).save()
       .then(profile => {
           res.json({
               errCode: "0",
               errMsg: "",
               profile
           })
       })
       .catch(err => console.error(err))
});

router.get("/", passport.authenticate('jwt', {session: false}), (req, res) => {
   Profile.find()
       .then(profiles => {
           if (!profiles) {
               return res.status(500).json("没有任何数据")
           }
           res.json({
               errCode: "0",
               errMsg: "",
               profiles
           })
       })
       .catch(err => res.status(500).json({
           errCode: "1",
           errMsg: err
       }))
});

router.get("/:id", passport.authenticate('jwt', {session: false}), (req, res) => {
    Profile.findOne({_id: req.params.id})
        .then(profile => {
            if (!profile) {
                return res.status(500).json("没有任何数据")
            }
            res.json({
                errCode: "0",
                errMsg: "",
                profile
            })
        })
        .catch(err => res.status(500).json({
            errCode: "1",
            errMsg: err
        }))
});

router.post("/edit/:id", passport.authenticate('jwt', {session: false}), (req, res) => {
    const profileFields = {};
    if(req.body.type) profileFields.type = req.body.type;
    if(req.body.description) profileFields.description = req.body.description;
    if(req.body.income) profileFields.income = req.body.income;
    if(req.body.expense) profileFields.expense = req.body.expense;
    if(req.body.cash) profileFields.cash = req.body.cash;
    if(req.body.remark) profileFields.remark = req.body.remark;

    Profile.findOneAndUpdate(
        {_id: req.params.id},
        {$set: profileFields},
        {new: true}
    ).then(profile => {
        res.json({
            errCode: "0",
            errMsg: "",
            profile
        })
    }).catch(err => {
        res.status(500).json({
            errCode: "1",
            errMsg: err
        })
    })

});

router.get("/delete:id", passport.authenticate('jwt', {session: false}), (req, res) => {
    Profile.findOneAndRemove({_id: req.params.id})
        .then(profile => {
            profile.save()
                .then(profile => {
                    res.json({
                        errCode: "0",
                        errMsg: "",
                        profile
                    })
                })
        })
        .catch(err => res.status(500).json({
            errCode: "1",
            errMsg: "删除失败:" + err
        }))
});

module.exports = router;