const constants = require("../../constants/constants");
const AnnouncementService = require("../../services/AnnouncementService");
const HttpResponseService = require("../../services/HttpResponseService");

module.exports = async function (req, res) {
  try {
      const {announcementId} = req.params;

    const announcementResponse = await AnnouncementService.getUserAnnouncementById(req.user.id, announcementId);

    switch(announcementResponse.status){
        case constants.RESSOURCE_SUCCUSSFULLY_FETCHED:
            return HttpResponseService.json(res, 200, constants.RESSOURCE_SUCCUSSFULLY_FETCHED, announcementResponse.data);
        case constants.RESSOURCE_NOT_FOUND:
            return HttpResponseService.notFound(res)
        case constants.DB_ERROR:
            return HttpResponseService.serverError(res, announcementResponse.error);
    }
  } catch (err) {
    console.log(err)
    return HttpResponseService.serverError(res, err)
  }
}
