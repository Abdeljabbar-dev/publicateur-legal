const Joi = require('joi');
const HttpResponseService = require('../services/HttpResponseService');
const announcementTypes = require('../constants/announcement-types');

module.exports = async function (req, res, next) {

  const params = req.body;
  
  const userShema = Joi.object().keys({
    data: Joi.object().required(),
    announcementType: Joi.string().required().valid(...announcementTypes),
  }).unknown(false);

  const { error } = userShema.validate(params);

  if (error) {
    return HttpResponseService.badRequest(res, error);
  } else {
    next();
  }
};
