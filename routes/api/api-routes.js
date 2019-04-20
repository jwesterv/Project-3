const express = require("express");
const router = express.Router();
const famController = require("../../controllers/famController");

var db = require("../../models");
// Routes
// =============================================================

 

  //     GET ROUTES 
    router.get("/wishes", function (req, res) {
      
        db.Wish.findAll({
            
        }).then(function (dbWish) {
            res.json(dbWish);
        });
    });

   


  //POST ROUTES
  router.post("/wishes", function (req, res) {
    console.log(req.body);
    //insert wish into table
    db.Wish.create({
      text: req.body.text,
      
    }).then(function (dbWish) {
      // callback function - access new wish 
      res.json(dbWish);
    });
  });

  router.post("/profile", function (req, res) {
    console.log(req.body);
    
    db.Profile.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthday: req.body.birthday,
      phone: req.body.phone,      
      email: req.body.email,
      address: req.body.address,
      city: req.body.city,
      st: req.body.st,
      zip: req.body.zip
    }).then(function (dbProfile) {
      
      res.json(dbProfile);
    });
  });



  module.exports = router;




//select*wishes where userid=???