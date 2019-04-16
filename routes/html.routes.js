var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    console.log("hello")
   
})

router.get("/user", function(req, res) {
    console.log("user")
   
})

module.exports = router;