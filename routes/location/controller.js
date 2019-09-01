const location = require("../../utils/getLocation");

const get = (req, res, next) => {

    location.get(req.ip).then((response) => {
        if (!response){
            res.status(404).json({response});
        } else {
            res.json(JSON.parse(response));
        }
    }).catch((error) => {
        console.log(error);
    });

};

module.exports = {
    get
}