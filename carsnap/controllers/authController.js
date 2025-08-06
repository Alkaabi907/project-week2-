const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Show login form
const loginForm = (req, res) => {
  res.render('auth/Login'); // Make sure views/auth/Login.jsx exists
};

// Show signup form
const registerForm = (req, res) => {
  res.render('auth/Signup'); // Make sure views/auth/Signup.jsx exists
};

// Handle user signup
const handleSignup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).send('Please fill all fields');
    }

    // Check if username or email already exists
    const userExists = await User.findOne({ $or: [{ username }, { email }] });
    if (userExists) {
      return res.status(409).send('Username or email already taken');
    }

    // Create and save new user (password hashing handled in model)
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.redirect('/auth/login');
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).send('Error during signup');
  }
};

// Handle user login (by username or email)
const handleLogin = async (req, res) => {
  try {
    const { login, password } = req.body;
    // Find user by username or email
    const user = await User.findOne({ 
      $or: [{ username: login }, { email: login }]
    });
    console.log(user)
    req.session.userId = user._id;

    if (!login || !password) {
      return res.status(400).send('Please enter username/email and password');
    }


    if (!user) {
      return res.status(401).send('Invalid credentials');
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send('Invalid credentials');
    }

    // Create JWT token valid for 1 hour
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Store token in cookie
    res.cookie('token', token, { httpOnly: true });

    res.redirect('/cars');
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).send('Login error');
  }
};

// Handle logout
const handleLogout = (req, res) => {
  res.clearCookie('token'); // Remove token from cookie
  res.redirect('/auth/login'); // ✅ Redirect to login page
};

module.exports = {
  loginForm,
  registerForm,
  handleSignup,
  handleLogin,
  handleLogout,
};
