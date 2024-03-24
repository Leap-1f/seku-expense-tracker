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
