const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Auth pages
router.get('/signup', authController.signupForm);
router.get('/login', authController.loginForm);

// Auth actions
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

module.exports = router;
