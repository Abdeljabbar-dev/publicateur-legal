const constants = require("../../constants/constants");
const PasswordResetService = require("../../services/PasswordResetService");
module.exports = async function (req, res) {
  try {
    const params = req.body
    const userResponse = await UserService.getUserByEmail(params.email);

    switch (userResponse.status) {
      case constants.RESSOURCE_SUCCUSSFULLY_FETCHED:
        const PasswordResetResponse = await PasswordResetService.sendPasswordResetToken(userResponse.data);

        return HttpResponseService.json(res, 201, constants.PASSWORD_RESET_SENT);

      case constants.DB_ERROR:
        return HttpResponseService.serverError(res, userResponse.error);

      default:
        return HttpResponseService.serverError(res, userResponse.error);
    }
  } catch (err) {
    return HttpResponseService.serverError(res, err);
  }
}
