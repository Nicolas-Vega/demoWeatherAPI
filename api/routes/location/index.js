var express = require('express');
var router = express.Router();
const controller = require('./controller');


  /**
  * @api {get} /location Get the location data of the current ip
  * @apiName location
  * @apiGroup location
  *
  */
router.get('/location', controller.get);
  
module.exports = router;