const { celebrate, Joi } = require('celebrate');

module.exports.validateUserBody = celebrate({
  body: Joi.object().keys({
    id: Joi.number().min(1),
    balance: Joi.number().min(1),
    first_name: Joi.string().min(2).max(30),
    last_name: Joi.string().min(2).max(30),
  }),
});
