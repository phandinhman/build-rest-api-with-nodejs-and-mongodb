const Product = require('../models/product');

module.exports.createProduct = async (data) => {
  console.log('Running here');
  try {
    let product = new Product({
      ...data
    });

    let result = await product.save();

    return result.toObject();
  } catch (error) {
    console.log('Something went wrong!');
    throw new Error(error());
  }
}
