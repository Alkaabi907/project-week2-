const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// GET نماذج تسجيل الدخول والتسجيل
router.get('/login', authController.loginForm);
router.get('/signup', authController.registerForm);

// POST تعامل مع بيانات النماذج
router.post('/signup', authController.handleSignup);
router.post('/login', authController.handleLogin);
router.get('/logout', authController.handleLogout);

module.exports = router;
