const constants = require("../../constants/constants");
const EmailVerificationService = require("../../services/EmailVerificationService");
const HttpResponseService = require("../../services/HttpResponseService");
const UserService = require("../../services/UserService");

module.exports = async function (req, res) {
  try {
    const params = req.body
    const userResponse = await UserService.getUserByEmail(params.email);

    if (userResponse.status == constants.RESSOURCE_SUCCUSSFULLY_FETCHED) return HttpResponseService.conflict(res)

    const createdUser = await UserService.createUser(params);

    switch (createdUser.status) {
      case constants.RESSOURCE_SUCCUSSFULLY_CREATED:
        const EmailVerificationResponse = await EmailVerificationService.sendEmailVerificationToken(createdUser.data);
        return HttpResponseService.json(res, 201, constants.RESSOURCE_SUCCUSSFULLY_CREATED, createdUser.data)

      default:
        return HttpResponseService.serverError(res, createdUser.error);
    }
  } catch (err) {
    return HttpResponseService.serverError(res, err);
  }
}
