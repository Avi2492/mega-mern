import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// .use used for middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "20kb" })); // Parse incoming requests with JSON payloads

// Encode urls extended used for give objects inside objects
app.use(express.urlencoded({ extended: true, limit: "20kb" }));

// Static used for file storage
app.use(express.static("public"));

//cookieParser We can acces cookies of user and we can set it up
app.use(cookieParser());

//routes
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);

export { app };
