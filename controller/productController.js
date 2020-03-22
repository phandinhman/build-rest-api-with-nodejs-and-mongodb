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
