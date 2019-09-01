var express = require('express');
var router = express.Router();
const controller = require('../forecast/controller');


  /**
  * @api {get} /forecast Get the wather of a city
  * @apiName forecast
  * @apiGroup forecast
  *
  * @apiParam {City} city name.
  * @apiSampleRequest /forecast/London
  */
router.get('/current/:city?', controller.get(1));
  
module.exports = router;