const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  const { name, dob, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, dob, email, password: hashedPassword });
    await user.save();
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user: { name, dob, email } });
  } catch (err) {
    res.status(500).json({ error: 'User already exists or server error' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !password || !(bcrypt.compare(password, user.password))) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user: { name: user.name, dob: user.dob, email } });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // exclude password field
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Server error while fetching users' });
  }
});

module.exports = router;