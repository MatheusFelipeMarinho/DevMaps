const Dev = require('../Models/Dev');
const ParseStringAsArray = require('../Utils/ParseStringAsArray');


module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs} = request.query;

        const techsArray = techs.split(',').map(tech => tech.trim());    

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location:{
                $near: {
                    type: 'Point',
                    coordinates: [longitude, latitude],               
                },
                $maxDistance: 10000
            },
        });
        

        return response.json({ devs })

    },
}