const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Show login and signup forms
router.get('/login', authController.loginForm);
router.get('/signup', authController.registerForm);

// Handle signup and login
router.post('/signup', authController.handleSignup);
router.post('/login', authController.handleLogin);

// ✅ Handle logout via POST
router.post('/logout', authController.handleLogout);

module.exports = router;
