//Routes to access Profiles in the search box on the family page

const Profile = require("../models/user.model");

module.exports = function (app) {
    app.get("/api/all", function (req, res) {
        Profile.findAll({}), then(function (results) {
            res.json(results);
        });
    });

    app.get("/api/:firstName", function (req, res) {
        if (req.params.firstName) {
            Profile.findAll({
                where: {
                    firstName: req.params.firstName
                }
            }).then(function (results) {
                res.json(results);
            });
        }

        Profile.findAll({}), then(function (results) {
            res.json(results);
        });
    });

    app.get("/api/:lastName", function (req, res) {
        if (req.params.lastName) {
            Profile.findAll({
                where: {
                    lastName: req.params.lastName
                }
            }).then(function (results) {
                res.json(results);
            });
        }


    });
    app.get("/api/:accessCode", function (req, res) {
        if (req.params.accessCode) {
            Profile.findAll({
                where: {
                    accessCode: req.params.accessCode
                }
            }).then(function (results) {
                res.json(results);
            });
        }


    });

}