const forecast = require("../../utils/getForecast");

const get = days => (req, res, next) => {

    const { city } = req.params;

    var func = (!city || city == '') ? forecast.getByIp : forecast.get;

    func(city, days).then((response) => {
        if (response.cod === "404"){
            res.status(404).json({response});
        } else {
            res.json(JSON.parse(response));
        }
    }).catch((error) => {
        res.status(error.statusCode ? error.statusCode : 500).json(JSON.parse(error.error));
    });

};

module.exports = {
    get
}