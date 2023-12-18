import express from "express";
import cors from "cors";
import "./loadEnv.mjs";
import "express-async-errors";
import blogRoutes from "./routes/blogdb.mjs";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/blogdb", blogRoutes);

// Global error handling
app.use((err, _req, res, next) => {
    res.status(500).send("Uh oh! An unexpected error occured.")
})

// start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});