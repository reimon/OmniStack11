const express = require('express');
const app = express();

app.get('/', (request, response) => {
  return response.json({ Evento: 'Semana Omnistack 11', Aluno: 'Reimon' });
});
app.listen(3333);
