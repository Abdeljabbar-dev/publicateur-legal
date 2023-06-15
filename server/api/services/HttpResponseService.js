/**
 * HttpResponseService
 *
 * @description :: Service for sending common http response
 */

const constants = require("../constants/constants");

module.exports = {

  /**
   * Handle Sending 200 Success or 201 Created responeses
   * @param {object} res - response object
   * @param {number} status - response status code (200 or 201)
   * @param {string} message - response message
   * @param {object} data - response data
   */

  json(res, status, message, data) {
    const response = {};
    if (status) response.status = status;
    if (message) response.message = message;
    if (data) response.data = data;
    return res.status(status).json(response);
  },


  /**
  * Handle sending 500 'Server Error' when an unxpected error is thrown
  * @param {object} res - response object
  * @param {object} err - error object, used to extract error message
  */

  serverError(res, err) {
    const response = {
      status: 500,
    }

    if(err && err.message) response.message = err.message;

    return res.status(500).json(response);
  },

  /**
   * Handle sending 400 'Bad Request' when request is not right, for a missing attribute for example
   * @param {*} res
   * @param {*} err
   */

  badRequest(res, err) {
    const response = {
      status: "Bad request",
    }

    if(err && err.message) response.message = err.message;

    if(err)
    return res.status(400).json(response);
  },

  /**
   * Handle sending 401 'Unauthorized' when request is missing authorization or authorization is expired or not right
   * @param {*} res
   * @param {*} err
   */

  unauthorized(res, message = constants.COMMON_UNAUTHORIZED) {
    const response = {
      status: 401,
      message: message
    }
    return res.status(401).json(response);
  },


  notFound(res, message = constants.RESSOURCE_NOT_FOUND) {
    const response = {
      status: 404,
      message: message
    }

    return res.status(404).json(response);
  },


  forbidden(res, message) {
    const response = {
      status: 403,
      message: message
    }
    return res.status(403).json(response);
  },


  conflict(res, message = constants.COMMON_CONFLICT) {
    const response = {
      status: 409,
      message: message
    };

    return res.status(409).json(response)
  }
};

