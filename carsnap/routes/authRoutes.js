// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// GET forms
router.get('/login', authController.loginForm);
router.get('/register', authController.registerForm);

// POST handlers
router.post('/register', authController.handleRegister);
router.post('/login', authController.handleLogin);
router.get('/logout', authController.handleLogout);

module.exports = router;
