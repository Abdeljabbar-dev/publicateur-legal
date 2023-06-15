const constants = require("../constants/constants");

module.exports = {
    createAnnouncement: async function (params) {
        try{
            const announcement =  await Announcement.create(params).fetch(); 

            return {
                status: constants.RESSOURCE_SUCCUSSFULLY_CREATED,
                data: announcement
            }
        } catch(err){
            return {
                status: constants.DB_ERROR,
                error: err
            }
        }
    },

    getUserAnnouncement: async function (user) {
        try{
            const announcements = await Announcement.find({user});

            return {
                status: constants.RESSOURCE_SUCCUSSFULLY_FETCHED,
                data: announcements
            }
        } catch(err){
            return {
                status: constants.DB_ERROR,
                error: err
            }
        }
    },

    getUserAnnouncementById: async function (userId, announcementId) {
        try{
            const announcement = await Announcement.findOne({user: userId, id: announcementId});

            if(announcement) {
                return {
                    status: constants.RESSOURCE_SUCCUSSFULLY_FETCHED,
                    data: announcement
                }
            } else {
                return {
                    status: constants.RESSOURCE_NOT_FOUND
                }
            }
        } catch(err){
            return {
                status: constants.DB_ERROR,
                error: err
            }
        }
    }
}