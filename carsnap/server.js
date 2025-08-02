require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const path = require('path');
const jwt = require('jsonwebtoken');

const carRoutes = require('./routes/carRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB error:', err));

// ✅ Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.static('public'));

// ✅ JWT Middleware to extract userId from token
app.use((req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.userId;
    } catch (err) {
      console.error('❌ Invalid token:', err.message);
      req.userId = null;
    }
  }
  next();
});

// ✅ View Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.set('views', path.join(__dirname, 'views'));

// ✅ Routes
app.use('/cars', carRoutes);
app.use('/auth', authRoutes);

// ✅ Home redirect
app.get('/', (req, res) => {
  res.redirect('/cars');
});

// ✅ 404 handler
app.use((req, res) => {
  res.status(404).render('notFound');
});

// ✅ Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
