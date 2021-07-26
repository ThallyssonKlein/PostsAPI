import express from 'express';
import { query } from "express-validator";

import Ping from "./Ping.js";
import Posts from "./Posts.js";

const router = express.Router();

router.get("/api/ping", Ping);
router.get("/api/posts", [
    query("tags").isString(),
    query("sortBy").optional().isString().isIn(["id", "reads", "likes", "popularity"]),
    query("direction").optional().isString().isIn(["asc", "desc"])
],Posts);

export default router;