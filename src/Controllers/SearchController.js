const Dev = require('../Models/Dev');
const ParseStringAsArray = require('../Utils/ParseStringAsArray');


module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs} = request.query;

        // const techsArray = ParseStringAsArray(techs);      
        

        return response.json({devs: []})

    },
}