const { Router } = require('express');

const routes = Router();

routes.get('/', (resquest, response) =>{
    return response.json({msg: 'Hello Word'});
 });

 module.exports = routes;