/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

  /**
   * User api
   */

  'post /user/login': 'user/login',
  'post /user/register': 'user/register',
  'post /user/validate-email': 'user/validate-email',
  'post /user/reset-password': 'user/reset-password',
  'post /user/validate-password': 'user/validate-password',
  'get /user/profile': 'user/profile',
  'put /user/edit-profile/:id': 'user/edit-profile',

  /**
   * Annoucements api
   */
  'post /announcements': 'announcement/create-announcement',
  'get /announcements': 'announcement/get-all-announcements',
  'get /announcements/:announcementId': 'announcement/get-announcement-by-id'

};
