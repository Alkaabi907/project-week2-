// controllers/authController.js

const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Show login form
const loginForm = (req, res) => {
  res.render('auth/Login');
};

// Show register form
const registerForm = (req, res) => {
  res.render('auth/Register');
};

// Handle registration
const handleRegister = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, password: hashedPassword });
    res.redirect('/auth/login');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error during registration');
  }
};

// Handle login
const handleLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).send('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send('Invalid credentials');
    }

    // Create JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.cookie('token', token, { httpOnly: true });
    res.redirect('/cars'); // or wherever the user should go after login
  } catch (err) {
    console.error(err);
    res.status(500).send('Login error');
  }
};

// Handle logout
const handleLogout = (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
};

// ✅ Export all functions
module.exports = {
  loginForm,
  registerForm,
  handleRegister,
  handleLogin,
  handleLogout
};
