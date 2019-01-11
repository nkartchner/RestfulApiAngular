const Task = require('../models/models');
const controller = require('../controllers/controllers');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

module.exports = function (app) {

    app.get('/api/tasks', function (request, response) {
        controller.getAll(request, response);
    });

    app.get('/api/:id', function (request, response) {
        controller.getOne(request, response);
    });

    app.post('/api/new', function (request, response) {
        controller.create(request, response);
    });
    
    app.put('/api/update/:id', function (request, response) {
        controller.update(request, response);
    });

    app.delete('/api/remove/:id', function (request, response) {
        controller.delete(request, response);
    });
    
    
    
    
    
    





    

};