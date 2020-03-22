const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  brand: String
}, {
  timestamp: true,
  toObject: {
    transform: function(doc,ret, option) {
      ret.id = ret._id;
      delete ret_id;
      delete ret._v;
      
      return ret;
    }
  },
});

module.exports = mongoose.model('Product', productSchema);
