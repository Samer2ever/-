const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
  title: String,
  price: String,
  image: String,
  description: String,
}, { timestamps: true });

module.exports = mongoose.model('Ad', adSchema);
