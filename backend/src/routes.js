const express = require('express');

const connection = require('./database/connection');

const OngController = require('./controllers/OngController');

const routes = express.Router();

routes.get('/ongs', OngController.index);

routes.post('/ongs', OngController.create);
module.exports = routes;
