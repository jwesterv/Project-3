var express = require("express");
var router = express.Router();
var helpers = require("./helpers/auth.helpers");
var models = require("../../models");
var crypto = require("crypto");
var jwt = require('jsonwebtoken');
// const app = express();



router.post("/register", function(req, res) {
    if(!req.body.username || !req.body.password || !req.body.email) {
        return res.status(400).json({msg: new Error("Please put all data on body")});
    }
    var user = {
        username: req.body.uername,
        email: req.body.email,
        salt: helpers.getSalt()
    };
console.log(user);
    user.hash = helpers.getHash(user.salt, req.body.password);
    models.User.create(user)
    .then(function(resp) {
        res.status(201).json({msg: "User Created"})
    })
    .catch(function(err) {
        res.status(400).json({msg: err.toString()});
    })
})

router.post("/login", function(req, res) {
    console.log("test")
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