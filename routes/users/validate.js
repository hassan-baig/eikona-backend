const Joi = require("joi");

module.exports.validateNew = Joi.object({
  walletId: Joi.string().required(),
  geoFigId: Joi.string().required(),
  geoFigName: Joi.string().required(),
  geoFigImage: Joi.string().required(),
  latitude: Joi.string().required(),
  longitude: Joi.string().required(),
});
