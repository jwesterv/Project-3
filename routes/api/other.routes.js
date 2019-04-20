const express = require("express");
const router = express.Router();



// const booksController = require("../../../../../19week-19/day2/reactRouter/controllers/booksController");


router.get("/other", function(req, res){
  console.log("test")
   
});
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
