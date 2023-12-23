import express from "express";
import db from "../db/conn.mjs";

const blogRoutes = express.Router();

blogRoutes.get("/", async (req, res) => {
    let collection = await db.collection("blogposts");
    let results = await collection.find({})
        .limit(50)
        .toArray();
    res.send(results).status(200);
});
blogRoutes.post("/search", async (req, res) => {
    let collection = await db.collection("blogposts");
    let results = await collection.find({})
        .limit(50)
        .toArray();
    res.send(results).status(200);
});
// blogRoutes.get("/search", async(req, res) => {
//     let collection = await db.collection("blogposts");
//     //let searchText = req.body.text;
//     let results = await collection.aggregate([
//         {
//             $search: {
//                 index: "searchBlogposts",
//                 text: {
//                     query: "Ipsum",
//                     path: {
//                         wildcard: "*"
//                     },
//                     fuzzy: {
//                         maxEdits: 2,
//                         prefixLength: 0
//                     }
//                 }
//             }
//         }
//     ]).toArray();
//     res.send(results).status(200);
// });



export default blogRoutes;