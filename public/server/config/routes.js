const Task = require('./models');
const controller = require('../controllers/controllers');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

module.exports = function (app) {

    app.get('/tasks', function (request, response) {
        controller.getAll(request, response);
    });

    app.get('/:id', function (request, response) {
        controller.getOne(request, response);
    });

    app.post('/new', function (request, response) {
        controller.create(request, response);
    });
    
    app.put('/update/:id', function (request, response) {
        controller.update(request, response);
    });

    app.delete('/remove/:id', function (request, response) {
        controller.delete(request, response);
    });
    
    
    
    
    
    





    

};