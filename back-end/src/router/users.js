import { Router } from "express";
import { NewUser, getAllUsers } from "../controller/users.js";

const user = Router();

user.route("/").get(getAllUsers).post(NewUser);
export { user };
