const constants = require("../constants/constants")


var jwt = require('jsonwebtoken');

module.exports = {
  generate: async function (data) {
    try {

      //
      const token = await jwt.sign({ data }, sails.config.custom.jwt.secret, { expiresIn: sails.config.custom.jwt.expiresIn });

      return {
        status: constants.JWT_SUCCUSSFULLY_GENERATED,
        data: token
      }

    } catch (err) {
      return {
        status: constants.JWT_ERROR,
        error: err
      }
    }
  },

  // verify token

  verify: async function (token) {
    try {

      const decoded = jwt.verify(token, sails.config.custom.jwt.secret);

      return {
        status: constants.JWT_VERIFIED,
        data: decoded
      }
    } catch (err) {
      return {
        status: constants.JWT_ERROR,
        error: err
      }
    }

  }

}
