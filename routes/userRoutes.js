const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Signup
router.post('/signup', async (req, res) => {
    console.log('Incoming signup request:', req.body);
  try {
    const { username, email, password } = req.body;

    const user = new User({ username, email, password });
    await user.save();

    res.status(201).json({ message: 'Signup successful', userId: user._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Signup failed' });
  }
});



// Add card
router.post('/add-card', async (req, res) => {
  const { userId, cardNumber, expiryMonth, cvv, cardholder } = req.body;

  console.log('Received user registration data:', req.body);
  
  try {
    await User.findByIdAndUpdate(userId, {
      card: { cardNumber, expiryMonth, cvv, cardholder }
    });

    res.json({ message: 'Card added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add card' });
  }
});


module.exports = router;
