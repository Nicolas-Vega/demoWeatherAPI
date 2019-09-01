const Request = require("request-promise-native");
const appid = 'b8d0790808f0b0f8af23dbf8f90ab3ea'
const url = 'https://api.openweathermap.org//data/2.5/'
const location = require("./getLocation");

const options = (city, days) => {
    return {
        headers: '{ \"content-type\": \"application/json\" }',
        url: `${url}${days == 1 ? 'weather' : 'forecast'}?q=${city}&appid=${appid}`
    }
}

const get = (city, days) => {
    return Request.get(options(city, days), (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        return body;
    });
};



const getByIp = (ip, days) => {
    return location.get(ip, days).then((res) =>{
        var city = location.parseCity(res);
        return get(city, days);
    });
};

module.exports = {
    get,
    getByIp
}