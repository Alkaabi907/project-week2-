const User = require('../models/User');
const jwt = require('jsonwebtoken');

const signupForm = (req, res) => res.render('auth/signup');
const loginForm = (req, res) => res.render('auth/login');

const signup = async (req, res) => {
  const user = await User.create(req.body);
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie('token', token, { httpOnly: true });
  res.redirect('/cars');
};

const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user || req.body.password !== user.password) return res.redirect('/auth/login');
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie('token', token, { httpOnly: true });
  res.redirect('/cars');
};

const logout = (req, res) => {
  res.clearCookie('token');
  res.redirect('/auth/login');
};

module.exports = { signupForm, loginForm, signup, login, logout };
