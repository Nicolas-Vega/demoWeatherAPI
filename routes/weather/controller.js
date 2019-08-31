const Request = require("request");
const appid = 'b8d0790808f0b0f8af23dbf8f90ab3ea'
const url = 'https://api.openweathermap.org//data/2.5/forecast'

const options = (city) => {
    return {
        headers: '{ \"content-type\": \"application/json\" }',
        url: `${url}?q=${city}&appid=${appid}`
    }
}

const get = (req, res, next) => {

    const { city } = req.params;
    
    Request.get(options(city), (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        var response = JSON.parse(body);

        if (response.cod === "404"){
            res.status(404).json({response});
        } else {
            res.json(response);
        }
    });
};

module.exports = {
    get
}