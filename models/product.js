const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  brand: String
}, {
  timestamp: true
});

module.exports = mongoose.model('Product', productSchema);
