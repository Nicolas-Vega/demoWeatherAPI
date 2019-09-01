const forecast = require("../../utils/getForecast");

const get = days => (req, res, next) => {

    const { city } = req.params;

    if (!city || city == '') {
        forecast.getByIp(req.ip, days).then((response) =>{
            if (response.cod === "404"){
                res.status(404).json({response});
            } else {
                res.json(JSON.parse(response));
            }
        });
    } else {
        forecast.get(city, days).then((response) => {
            if (response.cod === "404"){
                res.status(404).json({response});
            } else {
                res.json(JSON.parse(response));
            }
        });
    }
};

module.exports = {
    get
}