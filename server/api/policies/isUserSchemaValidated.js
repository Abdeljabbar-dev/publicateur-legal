const Joi = require('joi');
const HttpResponseService = require('../services/HttpResponseService');

module.exports = async function (req, res, next) {

  const params = req.body;

  const userShema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().regex(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)
  }).unknown(true);

  const { error } = userShema.validate(params);

  if (error) {
    return HttpResponseService.badRequest(res, error);
  } else {
    next();
  }
};
