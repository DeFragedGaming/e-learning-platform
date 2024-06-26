require('dotenv').config();

const express = require('express');
const { getPool } = require('./db');

const app = express();

let pool;
getPool().then(p => pool = p);

// Endpoint to fetch all users
app.get('/users', async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM users');
    res.json(results);
  } catch (err) {
    res.status(500).send('Error fetching users');
  }
});

// Endpoint to fetch all courses
app.get('/courses', async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM courses');
    res.json(results);
  } catch (err) {
    res.status(500).send('Error fetching courses');
  }
});

// Endpoint to fetch all enrollments
app.get('/enrollments', async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM enrollments');
    res.json(results);
  } catch (err) {
    res.status(500).send('Error fetching enrollments');
  }
});

const SERVER_PORT = process.env.PORT || 3306;
app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});