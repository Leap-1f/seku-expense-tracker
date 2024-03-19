import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8080;
const DATABASE_URL = "./config/database.json";
let users = JSON.parse(fs.readFileSync(DATABASE_URL, "utf8"));

app.get("/", (request, response) => {
  response.send(users);
});

app.post("/", (request, response) => {
  const newUser = request.body;
  users.push(newUser);
  fs.writeFileSync(DATABASE_URL, JSON.stringify(users));
  response.send(newUser);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
