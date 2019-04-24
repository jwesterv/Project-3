var express = require("express");
var router = express.Router();
var helpers = require("./helpers/auth.helpers");
var models = require("../../models");
// var crypto = require("crypto");
var jwt = require('jsonwebtoken');


router.post("/register", function(req, res) {
    
    // if(!req.body.username || !req.body.password || !req.body.email) {
    //     return res.status(400).json({msg: new Error("Please put all data on body")});
    // }
   
console.log(req.body.username);

var userid = helpers.getUserID();

    var user = {
        username: req.body.username,
        dob: req.body.dob,
        email: req.body.email,
        salt: helpers.getSalt(),
        userid: userid
    };

    var family = {
        accessCode: helpers.getAccessCode()
        ,familyName: req.body.familyName
        ,chatid: helpers.getChatID()
        ,userid: userid
    };

console.log("user" + family.userid);
    models.Family.create(family);
console.log(family.accessCode);
    user.hash = helpers.getHash(user.salt, req.body.password);
    models.User.create(user)
    
    .then(function(resp) {
        //connect to firebase here
        //write to database the familyID and chatID with the same structure as Chat
        res.status(201).json({msg: "User Created"})
    })
    .catch(function(err) {
        res.status(400).json({msg: err.toString()});
    })
})

router.post("/login", function(req, res) {
   
    if(!req.body.password || !req.body.email) {
        return res.status(400).json({msg: new Error("Email and Password are required.")});
    }
    models.User.findOne({
        where : {
            email: req.body.email
        }
    })
    .then(function(resp) {
        if(helpers.checkIfValidPass(resp, req.body.password)) {
            var expiry = new Date();
            expiry.setDate(expiry.getDate() + 7);
            res.json({
                token: jwt.sign({
                    exp: parseInt(expiry.getTime() / 1000),
                    userID: resp.id,
                    username: resp.username,
                    email: resp.email
                }, process.env.JWT_SECRET)
            });
        }
        else {
            throw new Error("Username and/or Password are incorrect");
        }
    })
    .catch(function(err) {
        res.status(400).json({msg: err.toString()});
    })
})

module.exports = router;