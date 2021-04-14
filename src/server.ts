import express, { json, request, response } from "express";

import { createCourse } from "./routes";

const app = express();
app.use(express.json());
app.post("/", createCourse);

app.listen(3005);
