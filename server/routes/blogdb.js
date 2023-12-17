// require('dotenv').config({ path: '../config.env' });
// const uri = process.env.ATLAS_URI;
const express = require("express");

// blogRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const blogRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;



// This section will help you get a list of all the records.
blogRoutes.get("/", function (req, res) {
    let db_connect = dbo.connect("blog");
    db_connect
        .collection("blogposts")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});



module.exports = blogRoutes;