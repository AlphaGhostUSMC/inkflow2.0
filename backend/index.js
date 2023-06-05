const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/database');
const User = require('./models/user');
const bcrypt = require('bcryptjs');
const e = require('express');

connectDB();

const salt = bcrypt.genSaltSync(10);


app.use(cors());
app.use(express.json());



app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username, password: bcrypt.hashSync(password, salt)
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOK = bcrypt.compareSync(password, userDoc.password);
  if (passOK) {
    res.json(userDoc);
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

app.listen(4008);