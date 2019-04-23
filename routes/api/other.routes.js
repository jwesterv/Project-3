//Template to add new routes

const express = require("express");
const router = express.Router();
const famController = require("../../controllers/famController");


router.get("/other", function(req, res){
  console.log("test") // test the route works
   
});


//add additional protected routes here




///this was the class example using books
// Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
