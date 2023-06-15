const constants = require("../../constants/constants");
const HttpResponseService = require("../../services/HttpResponseService");
const UserService = require("../../services/UserService");

module.exports = async function (req, res) {
  try {
    const params = req.body;

    // get user
    const userId = await UserService.getUserById(req.params.id);

    switch (userId.status) {
      // user exists
      case constants.RESSOURCE_SUCCUSSFULLY_FETCHED:
        // user exists, update user
        const userResponse = await UserService.updateUserById(req.params.id, params);

        // if update is successful send success response
        if (userResponse.status == constants.RESSOURCE_SUCCUSSFULLY_UPDATED) {

          return HttpResponseService.json(res, 200, constants.RESSOURCE_SUCCUSSFULLY_UPDATED, userResponse.data)
        }

        // if update is not successful send server error
        return HttpResponseService.serverError(res, userResponse.error)

      case constants.RESSOURCE_NOT_FOUND:
        return HttpResponseService.notFound(res)

      case constants.DB_ERROR:
        return HttpResponseService.serverError(res, userId.error)

      default:
        return HttpResponseService.serverError(res)
    }



  } catch (err) {

    console.log(err)
    return HttpResponseService.serverError(res, err)
  }
}
