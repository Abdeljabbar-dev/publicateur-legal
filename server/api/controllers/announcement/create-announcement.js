const constants = require("../../constants/constants");
const AnnouncementService = require("../../services/AnnouncementService");
const HttpResponseService = require("../../services/HttpResponseService");

module.exports = async function (req, res) {
  try {
    const params = req.body;

    const attributes = {
        ...params,
        user: req.user.id
    }

    const announcemnetRes = await AnnouncementService.createAnnouncement(attributes);
    // console.log(announcemnetRes);
    switch(announcemnetRes.status){
        case constants.RESSOURCE_SUCCUSSFULLY_CREATED:
            return HttpResponseService.json(res, 201, constants.RESSOURCE_SUCCUSSFULLY_CREATED, announcemnetRes.data);
        case constants.DB_ERROR:
            return HttpResponseService.serverError(res, announcemnetRes.error);
    }
  } catch (err) {
    console.log(err)
    return HttpResponseService.serverError(res, err)
  }
}
