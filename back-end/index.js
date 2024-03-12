// app.js or server.js

import express from "express";
import dotenv from "dotenv";
import signupRouter from "./src/router/users.js";

dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the signup router
app.use("/api", signupRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
