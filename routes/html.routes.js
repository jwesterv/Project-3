//html routes can be added here (non-protected)

const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    console.log("test") //test the route works
   
})



// Send every other request to the React app
// Define any API routes before this runs

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/index.html"));
// });

module.exports = router;