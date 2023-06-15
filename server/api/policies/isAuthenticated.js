const constants = require("../constants/constants");
const UserService = require("../services/UserService");
const HttpResponseService = require("../services/HttpResponseService");


module.exports = async function (req, res, next) {
  try {
    const token = req.headers["authorization"];

    if (!token) return HttpResponseService.unauthorized(res);

    const jwtResponse = await JwtService.verify(token);

    if (jwtResponse.status != constants.JWT_VERIFIED) return HttpResponseService.unauthorized(res);

    const user = jwtResponse.data.data;

    const userResponse = await UserService.getUserById(user.id);

    switch (userResponse.status) {
      case constants.RESSOURCE_SUCCUSSFULLY_FETCHED:
        req.user = userResponse.data;
        return next();
        break;

      case constants.RESSOURCE_NOT_FOUND:
        return HttpResponseService.unauthorized(res);
        break;

      default:
        return HttpResponseService.serverError(res, userResponse)
    }

  } catch (err) {
    return HttpResponseService.serverError(res, err);
  }

}

