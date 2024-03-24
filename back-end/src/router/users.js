import { Router } from "express";
import { newUser, getAllUsers, selectUserByEmail } from "../controller/users.js";

const user = Router();

user.route("/").get(getAllUsers).post(selectUserByEmail);
user.route("/signup").post(newUser);
export { user };
