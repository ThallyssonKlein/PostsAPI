import bparser from "body-parser";
import cors from "cors";
import express from "express";
import validator from "express-validator";

import Ping from "./routes/Ping.js";
import Posts from "./routes/Posts.js";

const port = 3000;
const app = express();
const query = validator.query;

app.use(bparser.urlencoded({extended: true}));
app.use(bparser.json());
app.use(cors());

app.get("/api/ping", Ping);
app.get("/api/posts", [
    query("tags").isString(),
    query("sortBy").optional().isString().isIn(["id", "reads", "likes", "popularity"]),
    query("direction").optional().isString().isIn(["asc", "desc"])
],Posts);

app.listen(port, `0.0.0.0`, () => {
    console.log(`Service initialized on port ${port}`);
});