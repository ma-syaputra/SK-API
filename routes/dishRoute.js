//const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./../swagger.json');

module.exports = function(app) {
    //var home = require('./../controllers/home');
    const dishes = require('./../controllers/dishes');
    app.use('/', swaggerUi.serve);
    app.get('/', swaggerUi.setup(swaggerDocument));
    app.route('/dishes').get(dishes.list);
    app.route('/dishes').post(dishes.add);
    app.route('/dishes/:id').get(dishes.detail);
    app.route('/dishes/:id').put(dishes.edit);
    app.route('/dishes/:id').delete(dishes.delete);
    
};