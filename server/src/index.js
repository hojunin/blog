import express from "express";
import dotenv from "dotenv";
import { getDB } from "./notion.js";
import { scheduler } from "./scheduler.js";
import cors from "cors";

dotenv.config();
const app = express();
scheduler();

app.use(cors());

app.listen(process.env.PORT, () =>
  console.log(`Server is Running at PORT : ${process.env.PORT}`)
);

app.get("/", (_, res) => res.send("HOME"));
app.get("/other", (_, res) => res.send("OTHER"));

// 현재 DB를 가져옵니다.
app.get("/db", (_, res) => {
  getDB()
    .then((data) => res.json(data))

    .catch((err) => console.error(err));
});

app.post("/publish", (req, res) => {});

app.get("/search", (req, res) => {
  //search
});
