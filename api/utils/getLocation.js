const Request = require("request-promise-native");
const apiKey = 'at_1oIexlaFq7cVujd2fp4RpQVjdTjTo'
const url = 'https://geo.ipify.org/api/v1'

const options = (ip) => {
    return {
        headers: '{ \"content-type\": \"application/json\" }',
        url: `${url}?apiKey=${apiKey}${ip ? `&ipAddress=${ip}` : ''}`
    }
}

const get = (ip) => {
    
    var ipAddress = ip.split(':')[ip.split(':').length-1] != '127.0.0.1' &&
        ip != '::1' ? ip : undefined;

    return Request.get(options(ipAddress), (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        return JSON.parse(body);
    });

}

const parseCity = (data) => {
    var obj = JSON.parse(data);

    return obj.location.city;
}

module.exports = {
    get,
    parseCity
}