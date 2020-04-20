const productService = require('../service/productServive');

module.exports.createProduct = async (req, res) => {
  let response = {};
  try {
    const result = await productService.createProduct(req.body);
    
    response.status = 200;
    response.message = 'Create product successfully';
    response.body = result;
  } catch (error) {
    console.log('Something went wrong.');
    
    response.status = 200;
    response.message = 'Create product fail';
    response.body = result;
  }

  return res.status(200).send(response);
}


module.exports.getAllProducts = async (req, res) => {
  let response = {};
  try {
    const result = await productService.getAllProducts();
    
    response.status = 200;
    response.message = 'Get all products successfully';
    response.body = result;
  } catch (error) {
    console.log(error);
    
    response.status = 200;
    response.message = 'Get all products fail';
    response.body = null;
  }

  return res.status(200).send(response);
}
