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
      // callback function - access new wish 
      res.json(dbWish);
    });
  });

  app.post("/api/profile", function (req, res) {
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



}




//select*wishes where userid=???