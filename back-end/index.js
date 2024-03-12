// app.js or server.js

import express from "express";
import dotenv from "dotenv";
import signupRouter from "./src/router/users.js";

dotenv.config();

const app = express();

<<<<<<< HEAD
// Middleware to parse JSON bodies
app.use(express.json());
=======
app.get("/category", async (req, res) => {
  const data = await sql`SELECT *FROM users`;
  console.log(data);
  res.send("hello");
});
>>>>>>> 574eeca1a0c202084a3f308883a88e9acca2260e

// Mount the signup router
app.use("/api", signupRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
