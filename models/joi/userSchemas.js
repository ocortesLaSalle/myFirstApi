const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports.createUserSchema = Joi.object({
  // name: Joi.string().alphanum().required(),
  mail: Joi.string().email().required(),
  // active: Joi.boolean(),
});
module.exports.updateUserSchema = Joi.object({
  mail: Joi.string().email().optional(),
  active: Joi.boolean().optional(),
});

module.exports.selectUserSchema = Joi.object({
  id: Joi.objectId().required(),
});

module.exports.selectAllSchema = Joi.object({
  active: Joi.boolean().optional(),
  skip: Joi.number().integer().optional(),
  limit: Joi.number().integer().optional(),
}).and('skip', 'limit');