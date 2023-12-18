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


export default blogRoutes;