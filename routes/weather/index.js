var express = require('express');
var router = express.Router();
const controller = require('./controller');


  /**
  * @api {get} /weather Get the wather of a city
  * @apiName weather
  * @apiGroup Weather
  *
  * @apiParam {City} city name.
  * @apiSampleRequest /weather/London
  */
router.get('/weather/:city', controller.get);
  
module.exports = router;