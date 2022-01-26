const express = require('express');
const routes = express.Router();
const controllers = require('./src/controllers');


const homePage = routes.get('/', controllers.homePage);
const lastWeights = routes.get('/lastWeights', controllers.lastWeights);
const registerWeight = routes.post('/registerWeight', controllers.registerWeights);

module.exports = {
    homePage, 
    lastWeights, 
    registerWeight
}