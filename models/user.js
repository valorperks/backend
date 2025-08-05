const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  cardNumber: String,
  expiryMonth: String,
  cvv: String,
  cardholder: String
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  card: cardSchema // embedded card object
});

module.exports = mongoose.model('User', userSchema);

