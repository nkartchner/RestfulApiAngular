const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const path = require('path');

app.use(express.static(path.join(__dirname, './public/dist/public') ));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

mongoose.Promise = global.Promise;

const routes = require('./server/config/routes');
routes(app);

app.listen(8000, function () {
    console.log("listening on port 8000");
});

