const express = require("express");
const router = express.Router();
const famController = require("../../controllers/famController");

var db = require("../../models");


// Routes
// =============================================================

//ROUTES FOR WISHES
//===========================================================
//GET WISHES 
router.get("/wishes", function (req, res) {
  var query = {};
  if (req.query.profile_id) {
    query.ProfileId = req.query.profile_id;
  }
  db.Wish.findAll({
    where: query
  }).then(function (dbWish) {
    res.json(dbWish);
  });
});




//POST WISHES
router.post("/wishes", function (req, res) {
  console.log(req.body);
  //insert wish into table
  db.Wish.create({
    //userid: req.body.userid
    //need to do an axios get??? link users to wishes, or use auth token
    text: req.body.text,
    granted: req.body.granted
  }).then(function (dbWish) {
    // callback function - access new wish 
    res.json(dbWish);
  });
});




//DELETE WISHES ROUTE
router.delete("/wishes/:id", function (req, res) {
  // We just have to specify which todo we want to destroy with "where"
  db.Wish.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (dbWish) {
    res.json(dbWish);
  });
})



//UPDATE WISHES (PUT ROUTE)
router.put("/wishes", function (req, res) {

  db.Wish.update({
    text: req.body.text,
    granted: req.body.granted
  }, {
      where: {
        id: req.body.id
      }
    }).then(function (dbWish) {
      res.json(dbWish);
    });
});



//PROFILE ROUTES
//===================================================================================
//GET PROFILES
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


router.post("/calendar", function (req, res) {
  console.log(req.body);

  db.Calendar.create({
    event: req.body.firstName,
    eventStart: req.body.eventStart,
    eventEnd: req.body.eventEnd,
    eventTime: req.body.eventTime,
    description: req.body.description

  }).then(function (dbCalendar) {

    res.json(dbCalendar);
  });
});


module.exports = router;