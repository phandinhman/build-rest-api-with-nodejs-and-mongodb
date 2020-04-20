const Product = require('../models/product');
const { formatMongoData } = require('../helpers/dbHelper');

module.exports.createProduct = async (data) => {
  console.log('Running here');
  try {
    let product = new Product({
      ...data
    });

    let result = await product.save();

    return formatMongoData(result);
  } catch (error) {
    console.log('Something went wrong!');
    throw new Error(error());
  }
}


module.exports.getAllProducts = async (data) => {
  console.log('Running here');
  try {
    let products = await Product.find({});

    return formatMongoData(products);
  } catch (error) {
    console.log('Something went wrong!');
    throw new Error(error);
  }
}
