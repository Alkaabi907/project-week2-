require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const path = require('path');

// Routes
const carRoutes = require('./routes/carRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB error:', err));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cookieParser());

// Serve static files from public folder
app.use(express.static('public'));

// View Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/cars', carRoutes);
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.redirect('/cars');
});

// 404
app.use((req, res) => {
  res.status(404).render('notFound');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
