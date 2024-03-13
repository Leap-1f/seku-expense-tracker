import express from "express";
import { sql } from "./config/database.js";

const app = express();
const PORT = 8080;

app.get("/users", async (request, response) => {
  const Userdata = await sql`SELECT * FROM users`;
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
