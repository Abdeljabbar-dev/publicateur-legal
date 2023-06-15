const constants = require("../../constants/constants");
const AnnouncementService = require("../../services/AnnouncementService");
const HttpResponseService = require("../../services/HttpResponseService");

module.exports = async function (req, res) {
  try {
    const announcementsResponse = await AnnouncementService.getUserAnnouncement(req.user.id);

    switch(announcementsResponse.status){
        case constants.RESSOURCE_SUCCUSSFULLY_FETCHED:
            return HttpResponseService.json(res, 200, constants.RESSOURCE_SUCCUSSFULLY_FETCHED, announcementsResponse.data);
        case constants.DB_ERROR:
            return HttpResponseService.serverError(res, announcementsResponse.error);
    }
  } catch (err) {
    console.log(err)
    return HttpResponseService.serverError(res, err)
  }
}
