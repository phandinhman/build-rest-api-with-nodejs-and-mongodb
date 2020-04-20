const Joi = require('joi');

const validateObjectSchema = (data, schema) => {
  const result = Joi.validate(data, schema,{ convert: false });

  if (result.error) {
    const error = result.error.details.map(value => {
      return {
        error: value.message,
        path: value.path,
      }
    });

    return error;
    
  }

  return null;
};

module.exports.validateBody = (schema) => {
  return (req, res, next) => {
    const error = validateObjectSchema(req.body, schema);
    let response = {};

    if (error) {
        response.body = error;
        response.message = 'Invalid fields';

        return res.status(401).send(response);
    }

    return next();
  };
}
