const constants = require("../../constants/constants")
const HttpResponseService = require("../../services/HttpResponseService")

module.exports = async function (req, res) {
  try {
    return HttpResponseService.json(res, 200, constants.RESSOURCE_SUCCUSSFULLY_FETCHED, req.user);
  } catch {
    return HttpResponseService.serverError(res);
  }
}
