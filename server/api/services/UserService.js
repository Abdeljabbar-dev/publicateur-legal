const constants = require("../constants/constants");

module.exports = {

  /**
   *
   * @param {Object} params - user params
   */

  createUser: async function (params) {
    try {

      // TODO: verify params

      // Call Model to create User
      const user = await User.create(params).fetch();

      // return created user
      return {
        status: constants.RESSOURCE_SUCCUSSFULLY_CREATED,
        data: user
      }
    } catch (error) {
      // return DB_ERROR if an error is thrown
      return {
        status: constants.DB_ERROR,
        error: error
      }
    }
  },


  getUserByEmail: async function (email) {
    try {

      // get user by email and decrypt
      const user = await User.findOne({ email: email }).decrypt();

      // if user exist return user with success status
      if (user) {
        return {
          status: constants.RESSOURCE_SUCCUSSFULLY_FETCHED,
          data: user
        }
      } {
        // else return status not found
        return {
          status: constants.RESSOURCE_NOT_FOUND,
        }
      }
    } catch (err) {

      // return status DB_ERROR if an error is thrown
      return {
        status: constants.DB_ERROR,
        error: err
      }
    }
  },


  getUserById: async function (id) {

    try {

      // get user by email and decrypt
      const user = await User.findOne({ id: id }).decrypt();


      // if user exist return user with success status

      if (user) {
        return {
          status: constants.RESSOURCE_SUCCUSSFULLY_FETCHED,
          data: user
        }
      } {

        // else return status not found
        return {
          status: constants.RESSOURCE_NOT_FOUND,
        }
      }
    } catch (err) {

      // return status DB_ERROR if an error is thrown
      return {
        status: constants.DB_ERROR,
        error: err
      }
    }

  },
  updateUserById: async function (userId, params) {
    try {
      const attributes = {}

      if (params.firstName) attributes.firstName = params.firstName;
      if (params.lastName) attributes.lastName = params.lastName;
      if (params.email) attributes.email = params.email;
      if (params.verified) attributes.verified = params.verified;
      if (params.password) attributes.password = params.password;

      const user = await User.updateOne({
        id: userId
      }).set(attributes);

      return {
        status: constants.RESSOURCE_SUCCUSSFULLY_UPDATED,
        data: user
      }

    } catch (err) {
      return {
        status: constants.DB_ERROR,
        error: err
      }
    }
  }


}
