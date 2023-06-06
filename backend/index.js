const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./config/database');
const User = require('./models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

connectDB();

const salt = bcrypt.genSaltSync(10);
const secret = 'mysecretsshhh';


app.use(cors({ origin: 'http://localhost:3000', credentials: true}));
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
    jwt.sign({username,id:userDoc._id}, secret, { expiresIn: '1h' }, (err, token) => {
      if (err) throw err;
      res.cookie('token', token, { httpOnly: true }).json({ token } );
    });    
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

app.listen(4008);