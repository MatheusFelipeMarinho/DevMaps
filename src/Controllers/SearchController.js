const Dev = require('../Models/Dev');
const ParseStringAsArray = require('../Utils/ParseStringAsArray');


module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs} = request.query;

         const techsArray = techs.split(',').map(tech => tech.trim());    
        

        return response.json({devs: []})

    },
}