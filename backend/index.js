import mongoose from "mongoose";
import express from "express";
import { PORT } from "./config.js";
import { mongoDBURL } from "./config.js";
import booksRoute from "./Routes/booksRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to mern stack");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to mongoDB...");
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to mongoDB...", err);
  });
