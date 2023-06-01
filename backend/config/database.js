require('dotenv').config();
const mongoose = require('mongoose');

const { MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_DATABASE } = process.env;

// MongoDB Atlas connection URI
const uri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@alphadbv1.9q93m.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
    process.exit(1);
  }
};

module.exports = connectDB;