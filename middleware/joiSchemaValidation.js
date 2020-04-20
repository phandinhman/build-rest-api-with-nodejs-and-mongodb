const Joi = require('joi');

const validateObjectSchema = (data, schema) => {
  const result = Joi.validate(data, schema);
  console.log('Joi Schema is running', result);
};

module.exports.validateBody = (schema) => {
  return (req, res, next) => {
    validateObjectSchema(req.body, schema);
  };
}
