const express = require("express");
const router = express.Router();
const famController = require("../../controllers/famController");

var db = require("../../models");


// Routes
// =================

//GET WISHES
router.get("/wishes", function (req, res) {

  db.Wish.findAll({

  }).then(function (dbWish) {
    res.json(dbWish);
  });
});

router.get("/family", function (req, res) {
  console.log(req.body)
  db.User.findAll({});
  db.Family.findAll({

  }).then(function (dbFamily) {

    res.json(dbFamily);
  });
});



// router.post("/getfamid", function (req, res) {
//   console.log(req.body.email)
//   db.User.findOne({ where: { email: req.body.email } })
//     // db.User.findAll({ where: { familyid: req.body.familyid } })
//     .then(function (resp) {

//            console.log(resp.familyid)
//       res.json( resp.familyid )

//   })


//     //   (response) => {
//     //   res.json({response})
//     //   console.log(response.familyid);

//     // })
//     .catch(function (error) {
//       console.log(error);

//     });

//   })

router.get("/getmembers", function (req, res) {
  console.log(req.params)

  db.User.findAll({ where: { familyid: req.body.familyid } })
    .then(function (dbMembers) {

      res.json(dbMembers);
    });
});

//:family/chat option
// router.get("/chat/:family/", function (req, res) {
//   //pulls chat from firebase based on familyID and renders to react
// })


//POST WISHES
router.post("/wishes", function (req, res) {
  console.log(req.body);
  //insert wish into table
  db.Wish.create({
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

});

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


//PROFILES
router.put("/profile", function (req, res) {
  console.log(req.body);

  db.ProfileForm.create({
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
})


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