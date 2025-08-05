const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.redirect('/auth/login');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId; // ✅ FIXED: userId instead of id
    next();
  } catch (err) {
    console.error('Invalid token:', err);
    res.redirect('/auth/login');
  }
};

module.exports = { requireAuth };
