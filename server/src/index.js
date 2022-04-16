import express from "express";
import dotenv from "dotenv";
import { getDB } from "./notion.js";
import { scheduler } from "./scheduler.js";

dotenv.config();
const app = express();
scheduler();

app.listen(process.env.PORT, () =>
  console.log(`Server is Running at PORT : ${process.env.PORT}`)
);

app.get("/", (_, res) => res.send("HOME"));

// 현재 DB를 가져옵니다.
app.get("/db", (_, res) => {
  getDB()
    .then((data) => res.send(data))
    .catch((err) => console.error(err));
});

app.post("/publish", (req, res) => {});

app.get("/search", (req, res) => {
  //search
});
