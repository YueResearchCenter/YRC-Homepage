/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
  profile: function(req, res) {

    if(req.params.uid !== undefined) {
      console.log(require('../../config/connections').localMysql);
    } 
  }

};

