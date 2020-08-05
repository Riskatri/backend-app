const { Joi } = require("celebrate");

const BaseSchema = Joi.object().keys({
  createdDt: Joi.date().optional(),
  createdBy: Joi.string().max(20).optional(),
  createdDt: Joi.date().optional(),
  createdBy: Joi.string().max(20).optional(),
});
module.exports = { BaseSchema };
