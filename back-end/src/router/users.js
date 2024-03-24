import { Router } from "express";
import { newUser, getAllUsers } from "../controller/users.js";

const user = Router();

user.route("/").get(getAllUsers).post(newUser);
export { user };
