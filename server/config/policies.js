/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  // '*': true,

  /**
   * User Api
   */
  'user/register': ['isUserSchemaValidated'],
  'user/login': ['isUserSchemaValidated'],
  'user/profile': ['isAuthenticated'],
  'user/edit-profile': ['isAuthenticated'],

  /**
   * Announcement Api
   */

  'announcement/create-announcement': ['isAuthenticated', 'isAnnouncementSchemaValidated'],
  'announcement/get-all-announcements': ['isAuthenticated'],
  'announcement/get-announcement-by-id': ['isAuthenticated'],


};
