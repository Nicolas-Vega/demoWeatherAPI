var express = require('express');
var router = express.Router();
var controller = require('./controller');


module.exports = router => {
    /**
    * @api {get} /weather  Get Weather
    * @apiName getWeather
    *
    */
    router.get('/weather', controller.get);
  };
  