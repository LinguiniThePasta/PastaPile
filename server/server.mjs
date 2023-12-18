import "./loadEnvironment.mjs";

// const express = require("express");
// const app = express();
// const cors = require("cors");
// require("dotenv").config({ path: "./config.env" });
// const port = process.env.PORT || 5173;
// app.use(express.json());
// app.use(cors());

// Import the routes
const blogRoutes = require('./routes/blogdb.mjs');

app.use("/blogs", blogRoutes);