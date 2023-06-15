//const PasswordReset = require("../models/PasswordReset");
const constants = require("../constants/constants");


module.exports = {
  sendPasswordResetToken: async function (user) {
    try {
      const code = Math.floor(100000 + Math.random() * 900000);

      const passwordReset = await PasswordReset.create({
        user: user.id,
        code: code
      }).fetch()

      // ResetService.sendEmail({ to: user.email, subject: "Password reset", attributes: { code: passwordReset.code, name: user.firstName }, template: "passwordReset" });

      return {
        status: constants.PASSWORD_RESET_SENT,
        data: passwordReset
      }

    } catch (err) {
      return {
        status: constants.EMAIL_SERVICE_ERROR,
        error: err
      }
    }
  },


  getPasswordResetByCode: async function (code) {
    try {
      const passwordReset = await PasswordReset.findOne({
        code: code
      }).populate('user')

      if (passwordReset) {
        return {
          status: constants.RESSOURCE_SUCCUSSFULLY_FETCHED,
          data: passwordReset
        }
      } else {
        return {
          status: constants.RESSOURCE_NOT_FOUND
        }
      }

    } catch (err) {
      return {
        status: constants.DB_ERROR,
        error: err
      }
    }
  }
}
