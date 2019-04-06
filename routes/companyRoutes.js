const models = require("../models");

module.exports = function (app) {

    // GET route for finding companies
    app.get("/api/user", function (req, res) {
        models.User.findAll({
            include: [models.Post]
        }).then(function (dbCompany) {
            res.json(dbCompany);
        });
    });

    // POST route for creating companies
    app.post("/api/user", function (req, res) {
        models.User.create(req.body).then(function (dbCompany) {
            res.json(dbCompany);
        });
    });

    // DELETE route for deleting companied (by id)
    app.delete("/api/user/:id", function (req, res) {
        models.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbCompany) {
            res.json(dbCompany);
        });

        // PUT route for updating posts
        app.put("/api/user", function (req, res) {
            models.User.update(
                req.body,
                {
                    where: {
                        id: req.body.id
                    }
                }).then(function (dbCompany) {
                    res.json(dbCompany);
                });

        });

    });

};
