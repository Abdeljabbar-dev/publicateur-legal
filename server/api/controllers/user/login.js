const constants = require("../../constants/constants");
const HttpResponseService = require("../../services/HttpResponseService");
const JwtService = require("../../services/JwtService");
const UserService = require("../../services/UserService");

module.exports = async function (req, res) {
  try {

    // get request body params
    const params = req.body;

    // fetch user using email
    const userResponse = await UserService.getUserByEmail(params.email);

    switch (userResponse.status) {

      // user fetched successfully, prcessed
      case constants.RESSOURCE_SUCCUSSFULLY_FETCHED:

        // verify password
        // if password is not correct send unauthorized response;
        if (userResponse.data.password != params.password) return HttpResponseService.unauthorized(res);


        if (!userResponse.data.verified) return HttpResponseService.forbidden(res, constants.USER_EMAIL_NOT_VERIVIED);

        // password is correct, login success
        // generate token
        const tokenResponse = await JwtService.generate(userResponse.data);

        switch (tokenResponse.status) {
          // token successfully generated
          case constants.JWT_SUCCUSSFULLY_GENERATED:
            const response = {
              token: tokenResponse.data,
              user: userResponse.data
            }
            return HttpResponseService.json(res, 200, constants.USER_LOGIN_SUCCESS, response);

          // token failed
          case constants.JWT_ERROR:
            return HttpResponseService.serverError(res, tokenResponse.error);

          default:
            return HttpResponseService.serverError(res);
        }

      // user doesnt exist send NOT FOUND
      case constants.RESSOURCE_NOT_FOUND:
        return HttpResponseService.notFound(res, constants.USER_NOT_FOUND);

      // server error
      default:
        return HttpResponseService.serverError(res);
    }
  } catch (err) {
    return HttpResponseService.serverError(res, err)
  }
}
