const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make:        String,
  model:       String,
  year:        Number,
  price:       Number,
  imageUrl:    String, // ✅ Renamed from "image" to "imageUrl"
  description: String,
  owner:       { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Car', carSchema);
