const constants = require("../../constants/constants");
const EmailVerificationService = require("../../services/EmailVerificationService");
const HttpResponseService = require("../../services/HttpResponseService");
const UserService = require("../../services/UserService");

module.exports = async function (req, res) {
  try {
    const params = req.body;

    // get verfication code
    const verificationCode = await EmailVerificationService.getEmailVerificationByCode(params.code);

    switch (verificationCode.status) {
      // verification code exist
      case constants.RESSOURCE_SUCCUSSFULLY_FETCHED:
        // if user account is already verfied return conflict
        if (verificationCode.data.user.verified) return HttpResponseService.conflict(res, constants.USER_EMAIL_ALREADY_VERIFIED);

        // check if code belongs to user
        if (verificationCode.data.user.email == params.email) {

          // code belongs to user, update user
          const userResponse = await UserService.updateUserById(verificationCode.data.user.id, { verified: true });

          // if update is successfull send success response
          if (userResponse.status == constants.RESSOURCE_SUCCUSSFULLY_UPDATED) {

            const dropResponse = await EmailVerification.destroyOne({ code: params.code });

            return HttpResponseService.json(res, 200, constants.USER_SUCCUSSFULLY_VERIFIED, userResponse.data)
          }

          // if update is not successed send server error
          return HttpResponseService.serverError(res, userResponse.error)

        } else {
          // code doesnt belong to user send bad request
          return HttpResponseService.badRequest(res, {message: "INVALID_CODE"});
        }

      // verification code doesnt exist
      case constants.RESSOURCE_NOT_FOUND:
        return HttpResponseService.badRequest(res, {message: "INVALID_CODE"});

      case constants.DB_ERROR:
        return HttpResponseService.serverError(res, verificationCode.error)

      default:
        return HttpResponseService.serverError(res)
    }


  } catch (err) {

    console.log(err)
    return HttpResponseService.serverError(res, err)
  }
}
