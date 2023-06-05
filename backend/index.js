const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/database');
const User = require('./models/user');

connectDB();

app.use(cors());
app.use(express.json());



app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({ username, password });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.listen(4008);