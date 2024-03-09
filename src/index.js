// import express from "express";
import * as dotenv from "dotenv";
import connectToDB from "./db/connectToDB.js";

dotenv.config();
// const PORT = process.env.PORT || 5000;
// const app = express();

// app.get("/", (req, res) => {
//   res.send("API is running!");
// });

connectToDB();
