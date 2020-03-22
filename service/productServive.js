const Product = require('../models/product');

module.exports.createProduct = async (data) => {
  console.log('Running here');
  try {
    let product = new Product({
      ...data
    });

    return await product.save();
  } catch (error) {
    console.log('Something went wrong!');
    throw new Error(error());
  }
}
