const Task = require('../models/models');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

module.exports = {
    getAll: function (request, response) {

        Task.find({}, function (err, data) {
            if (err) {
                response.json({ message: "Error", error: err });
            }
            else {
                response.json({ message: "Success", data: data });
            }
        });

    },

    getOne: function (request, response) {

        Task.find({ _id: request.params.id }, function (err, data) {
            if (err) {
                response.json({ message: "Error", error: err });
            }
            else {
                response.json({ message: "Success", data: data });
            }
        });

    },

    update: function (request, response) {
        console.log('logging request params in express controller');
        console.log(request.body);
        
        Task.findOneAndUpdate({ _id: request.params.id }, {
            title: request.body.title,
            description: request.body.description,
            completed: request.body.completed
        }, function (err, data) {
            if (err) {
                response.json({ message: "Error", error: err });
            }
            else {
                console.log('Returning updated data from Express controller.js');
                
                response.json({ message: "Success", data: data });
            }
        });

    },

    delete: function (request, response) {

        Task.remove({ _id: request.params.id }, function (err, data) {
            if (err) {
                response.json({ message: "Error", error: err });
            }
            else {
                response.json({ message: "Success", data: data });
            }
        });

    },

    create: function (request, response) {
        const newTask = new Task(request.body);
        newTask.save(function (err, data) {
            if (err) {
                console.log('something went wrong');
                
                response.json({ message: "Error", error: err });
            }
            else {
                response.json({ message: "Success", data:data });
            }
        });
    }

};