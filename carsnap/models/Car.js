const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  price: Number,
  description: String,
  imageUrl: String,
  phone: String, // ✅ NEW FIELD
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  likes: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
]
});

module.exports = mongoose.model('Car', carSchema);
