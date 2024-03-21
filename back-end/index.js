import express from "express";
import cors from "cors";
import fs from "fs";
import { sql } from "./config/database.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8080;
// const DATABASE_URL = "./config/database.json";
// let users = JSON.parse(fs.readFileSync(DATABASE_URL, "utf8"));

// app.get("/", (request, response) => {
//   response.send(users);
// });

// app.get("/users", async (request, response) => {
//   const usersData = await sql`SELECT * FROM users`;
//   console.log(usersData);
//   response.send(usersData);
// });
// app.post("/users", async (request, response) => {
//   const usersData =
//     await sql`INSERT INTO users(name,password,email,currency_type) VALUES('seku','aaaaaaaa','Ssenge1515@gmail.com','mnt')`;
//   console.log(usersData);
//   response.send(usersData);
// });

// app.post("/users", (request, response) => {
//   const newUser = request.body;
//   users.push(newUser);
//   fs.writeFileSync(DATABASE_URL, JSON.stringify(users));
//   response.send(newUser);
// });
app.post("/users", async (request, response) => {
  const newUser = request.body;
  console.log(newUser);
  try {
    // Insert data into the database
    const usersData = await sql`
      INSERT INTO users (name, password, email, currency_type)
      VALUES (${newUser.name}, ${newUser.password}, ${newUser.email}, ${newUser.currency_type})
    `;
    console.log("User inserted:", usersData);
    response.send(newUser);
  } catch (error) {
    console.error("Error inserting user:", error);
    response.status(500).send("Internal Server Error");
  }
});

// app.get("/login", (request, response) => {
//   response.send(users);
// });

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
