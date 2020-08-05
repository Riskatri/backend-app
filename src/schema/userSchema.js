const { Joi } = require("celebrate");

const { BaseSchema } = require("./baseSchema");

const searchUserParamSchema = BaseSchema.keys({
  id: Joi.string().max(50).required(),
}).unknown(true);

const insertUserParamSchema = BaseSchema.keys({
  id: Joi.string().max(50).required(),
  name: Joi.string().max(50).required(),
  email: Joi.string().max(50).required(),
  password: Joi.string().max(50).required(),
  createBy: Joi.string().max(50).required(),
}).unknown(true);

const updateUserParamSchema = BaseSchema.keys({
  id: Joi.string().max(50).required(),
  name: Joi.string().max(50).required(),
  email: Joi.string().max(50).required(),
  password: Joi.string().max(50).required(),
  createBy: Joi.string().max(50).required(),
}).unknown(true);

const deleteUserParamSchema = BaseSchema.keys({
  id: Joi.string().max(50).required(),
}).unknown(true);

module.exports = {
  searchUserParamSchema,
  insertUserParamSchema,
  updateUserParamSchema,
  deleteUserParamSchema,
};
