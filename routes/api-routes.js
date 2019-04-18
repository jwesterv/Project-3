var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
 

  //     GET ROUTES 
    app.get("/api/wishes", function (req, res) {
      
        db.Wish.findAll({
            
        }).then(function (dbWish) {
            res.json(dbWish);
        });
    });

   


  //POST ROUTES
  app.post("/api/wishes", function (req, res) {
    console.log(req.body);
    //insert wish into table
    db.Wish.create({
      text: req.body.text,
      
    }).then(function (dbWish) {
      alert("Your wish has actually been submitted!;)")
      // callback function - access new wish 
      res.json(dbWish);
    });
  });

  app.post("/api/profile", function (req, res) {
    console.log(req.body);
    //insert wish into table
    db.Profile.create({
      birthday: req.body.birthday,
      phone: req.body.phone,
      address: req.body.address,
      email: req.body.email
    }).then(function (dbProfile) {
      // callback function - access new wish 
      res.json(dbProfile);
    });
  });



}




//select*wishes where userid=???