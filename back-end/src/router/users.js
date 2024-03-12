// signup.js

import express from 'express';
import { sql } from './config/database.js'; // Import your database connection

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate user input (e.g., check if required fields are provided)

    // Save user information to the database
    await sql`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${password})
    `;

    res.status(200).json({ message: 'User signed up successfully' });
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ message: 'Error signing up' });
  }
});

export default router;
