import bparser from "body-parser";
import cors from "cors";
import express from "express";
import router from "./routes/index.js";

const app = express();

app.use(bparser.urlencoded({extended: true}));
app.use(bparser.json());
app.use(cors());
app.use(router);

export default app;