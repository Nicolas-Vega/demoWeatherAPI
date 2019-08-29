const http = require("http");

var options = {
    host: "http://samples.openweathermap.org",
    port: 80,
    path: "/data/2.5/forecast?q=London,us&appid=b6907d289e10d714a6e88b30761fae22",
    method: "GET"
}

function getJSON(options, cb){
    http.request(options, function(res){
        var body = '';

        res.on('data', function(chunk){
            body += chunk;
        });

        res.on('end', function(){
            var result = JSON.parse(body);
            cb(null, result);
        });

        res.on('error', cb);
    })
    .on('error', cb)
    .end();

}

const get = (req, res, next) => {
    var values;
    
    getJSON(options, function(err, result){
        if(err){
            return console.log(err);
        }
        values = result;
    });

    res.JSON(values);
  };

module.export = {
    get
}