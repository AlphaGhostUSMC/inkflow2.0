require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/database');

// Create Express application
const app = express();

// Connect to MongoDB database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());


// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
const port = process.env.SERVER_PORT || 3001; // Change this to the desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`http://localhost:${port}`);
});