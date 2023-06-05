require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();


const { MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_DATABASE } = process.env;

app.use(cors());
app.use(express.json());

await mongoose.connect(`mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@alphadbv1.9q93m.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`)

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  res.json({ requestData: { username, password } });
});

app.listen(4008);