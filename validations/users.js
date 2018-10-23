const Joi = require("joi");

const validateCreate = {
  body: {
    "name": Joi.string().required()
  }
}

const validateUpdate = {
  body: {
    "name": Joi.string().required(),
    "_id": Joi.string().required()
  }
}

module.exports = { validateCreate, validateUpdate }