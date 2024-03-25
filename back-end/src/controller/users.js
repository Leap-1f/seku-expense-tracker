import { sql } from "../../config/database.js";
import bcrypt from "bcrypt";

export const getAllUsers = async (req, res) => {
  try {
    const data = await sql`SELECT * FROM users`;
    res.send(data);
  } catch (error) {
    console.log(error, "get all users error");
    res.status(500).send("Internal Server Error");
  }
};

export const newUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Insert data into the database
    const usersData = await sql`
      INSERT INTO users (name, password, email)
      VALUES (${name}, ${password}, ${email}) RETURNING *
    `;
    console.log("User inserted:", usersData);
    res.send({ success: true, statusCode: 201 });
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const selectUserByEmail = async (req, res) => {
  const { email } = req.body;
  try {
    // Insert data into the database
    const user = await sql`
      SELECT * FROM users WHERE email=${email}`;
    if (user.length == 0) {
      res.send({ success: true, statusCode: 201 });
    } else {
      res.send({ message: "already registered email", statusCode: 401 });
    }
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
