// index.js
import express from "express";
import { sql } from "./config/database.js";
const app = express();
const port = 3000;

app.get("/category", async (req, res) => {
  const data = await sql`SELECT *FROM users`;
  console.log(data);
  res.send("hello");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
