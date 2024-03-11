// index.js
import express from "express";
import { sql } from "./config/database.js";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
