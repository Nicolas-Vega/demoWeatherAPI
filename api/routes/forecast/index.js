var express = require('express');
var router = express.Router();
const controller = require('./controller');


  /**
  * @api {get} /forecast Get the wather of a city
  * @apiName forecast
  * @apiGroup forecast
  *
  * @apiParam {City} city name.
  * @apiSampleRequest /forecast/London
  */
router.get('/forecast/:city?', controller.get(5));
  
module.exports = router;