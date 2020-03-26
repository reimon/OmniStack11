const express = require('express');
const crypto = require('crypto');

const connection = require('./database/connection');

const routes = express.Router();

/* rota de criação das ONGS */
routes.post('/ongs', async (request, response) => {
  const { name, email, whatsapp, city, uf } = request.body;

  const id = crypto.randomBytes(4).toString('HEX');

  await connection('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf
  });

  return response.json({ id });
});
/* FIM da rota de criação de ongs */

module.exports = routes;
