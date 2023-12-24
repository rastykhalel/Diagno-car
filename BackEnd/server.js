const express = require('express');
const cors = require('cors');
const mysql = require('mysql');


const app = express();
app.use(cors());
app.use(express.json());

require('dotenv').config({ path: './config.env' }); // Adjust the path as needed
 // Load environment variables from .env file

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('MySQL connected');
  });
  
  // GET all users from `userinfo` table
  app.get('/api/users', (req, res) => {
    const sql = 'SELECT * FROM userinfo';
  
    db.query(sql, (err, results) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ users: results });
    });
  });
  
  app.post('/api/authenticate', (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT * FROM userinfo WHERE username = ? AND password = ?';
    
    db.query(sql, [username, password], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      
      if (result.length === 1) {
        // Authentication successful, send a success response or user details
        res.json({ message: 'Authentication successful', user: result[0] });
      } else {
        // Authentication failed, send an error response
        res.status(401).json({ error: 'Authentication failed' });
      }
    });
  });


  // GET user by ID from `userinfo` table
  app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    const sql = 'SELECT * FROM userinfo WHERE Id = ?';
  
    db.query(sql, userId, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ user: result[0] });
    });
  });
  
  // POST (Create) a new user in `userinfo` table
  app.post('/api/users/new', (req, res) => {
    const { Name, PhoneNumber, Password, Email, Location, Image, Access, Username } = req.body;
    const sql = 'INSERT INTO userinfo (Name, PhoneNumber, Password, Email, Location, Image, Access, Username) VALUES (? ,? , ?, ?, ?, ?, ?, ?)';
    const values = [Name, PhoneNumber, Password, Email, Location, Image, Access, Username];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'User created successfully', userId: result.insertId });
    });
  });
  
  // PUT (Update) user details in `userinfo` table by ID
  app.put('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    const { Name, PhoneNumber, Password, Email, Location, Image, Access } = req.body;
    const sql = 'UPDATE userinfo SET Name=?, PhoneNumber=?, Password=?, Email=?, Location=?, Image=?, Access=? WHERE Id=?';
    const values = [Name, PhoneNumber, Password, Email, Location, Image, Access, userId];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'User updated successfully' });
    });
  });
  
  // DELETE user from `userinfo` table by ID
  app.delete('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    const sql = 'DELETE FROM userinfo WHERE Id = ?';
  
    db.query(sql, userId, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'User deleted successfully' });
    });
  });
  
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });