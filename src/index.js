// import express from "express";
import * as dotenv from "dotenv";
import connectToDB from "./db/connectToDB.js";
import { app } from "./app.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
// const app = express();

// app.get("/", (req, res) => {
//   res.send("API is running!");
// });

connectToDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to the database: ", error);
  });
