const constants = require("../../constants/constants");
const PasswordResetService = require("../../services/PasswordResetService");
const HttpResponseService = require("../../services/HttpResponseService");
const UserService = require("../../services/UserService");

module.exports = async function (req, res) {
  try {
    const params = req.body;


    // get verfication code
    const resetCode = await PasswordResetService.getPasswordResetByCode(params.code);

    switch (resetCode.status) {
      // verification code exist
      case constants.RESSOURCE_SUCCUSSFULLY_FETCHED:


        // code belongs to user, update user
        const userResponse = await UserService.updateUserById(resetCode.data.user.id, { password: params.password });

        // if update is successfull send success response
        if (userResponse.status == constants.RESSOURCE_SUCCUSSFULLY_UPDATED) {

          const dropResponse = await PasswordReset.destroyOne({ code: params.code });
          return HttpResponseService.json(res, 200, constants.RESSOURCE_SUCCUSSFULLY_UPDATED, userResponse.data)
        }

        // if update is not successed send server error
        return HttpResponseService.serverError(res, userResponse.error)


      // verification code doesnt exist
      case constants.RESSOURCE_NOT_FOUND:
        return HttpResponseService.notFound(res)

      case constants.DB_ERROR:
        return HttpResponseService.serverError(res, resetCode.error)

      default:
        return HttpResponseService.serverError(res)
    }


  } catch (err) {

    console.log(err)
    return HttpResponseService.serverError(res, err)
  }
}
