const constants = require("../constants/constants");
const EmailService = require("./EmailService");


module.exports = {
  sendEmailVerificationToken: async function (user) {
    try {
      const code = Math.floor(100000 + Math.random() * 900000);

      const emailVerfication = await EmailVerification.create({
        user: user.id,
        code: code
      }).fetch()

      EmailService.sendEmail({ to: user.email, subject: "email verification", attributes: { code: emailVerfication.code, name: user.firstName }, template: "verifyEmail" });

      return {
        status: constants.EMAIL_VERIFICATION_SENT,
        data: emailVerfication
      }

    } catch (err) {
      return {
        status: constants.EMAIL_SERVICE_ERROR,
        error: err
      }
    }
  },


  getEmailVerificationByCode: async function (code) {
    try {
      const emailVerfication = await EmailVerification.findOne({
        code: code
      }).populate('user')

      if (emailVerfication) {
        return {
          status: constants.RESSOURCE_SUCCUSSFULLY_FETCHED,
          data: emailVerfication
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
