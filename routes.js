const express = require('express');
const routes = express.Router();
const controllers = require('./src/controllers');


const homePage = routes.get('/', controllers.homeControllers.homePage);
const homePagePost = routes.post('/test', controllers.homeControllers.treatPost);


module.exports = {
    homePage, 
    homePagePost
}