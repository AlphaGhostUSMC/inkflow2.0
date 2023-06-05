const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: tru, min: 4 },
    password: { type: String, required: true, min: 8 },
  },
);

const UserModel = model('User', userSchema);

module.exports = UserModel;