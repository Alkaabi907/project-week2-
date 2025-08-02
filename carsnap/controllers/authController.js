const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// عرض نموذج تسجيل الدخول
const loginForm = (req, res) => {
  res.render('auth/Login'); // تأكد من وجود views/auth/Login.jsx
};

// عرض نموذج التسجيل
const registerForm = (req, res) => {
  res.render('auth/Signup'); // تأكد من وجود views/auth/Signup.jsx
};

// التعامل مع التسجيل
const handleSignup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).send('Please fill all fields');
    }

    const userExists = await User.findOne({ $or: [{ username }, { email }] });
    if (userExists) {
      return res.status(409).send('Username or email already taken');
    }

    const newUser = new User({ username, email, password });
    await newUser.save(); // هاش كلمة المرور يتم تلقائياً في الموديل

    res.redirect('/auth/login');
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).send('Error during signup');
  }
};

// التعامل مع تسجيل الدخول (يمكن بـ username أو email)
const handleLogin = async (req, res) => {
  try {
    const { login, password } = req.body; // الحقل login يكون اسم المستخدم أو الايميل

    if (!login || !password) {
      return res.status(400).send('Please enter username/email and password');
    }

    // البحث بالمستخدم بناء على username أو email
    const user = await User.findOne({ 
      $or: [{ username: login }, { email: login }]
    });

    if (!user) {
      return res.status(401).send('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send('Invalid credentials');
    }

    // إنشاء JWT مع صلاحية 1 ساعة
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });

    res.redirect('/cars');
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).send('Login error');
  }
};

// تسجيل الخروج
const handleLogout = (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
};

module.exports = {
  loginForm,
  registerForm,
  handleSignup,
  handleLogin,
  handleLogout,
};
