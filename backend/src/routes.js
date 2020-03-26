const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {
  const body = request.body;

  console.log(body);
  return response.json({
    Evento: 'Semana Omnistack -  11.0',
    Aluno: 'Reimon Ferreira'
  });
});
module.exports = routes;
