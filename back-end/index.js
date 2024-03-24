import express from "express";
import cors from "cors";

import { user } from "./src/router/users.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8080;

app.use("/users", user);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
