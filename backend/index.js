/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar/list uma informação do backend
  * POST: Criar uma informação do backend
  * PUT: Alterar uma informação no backend
  * DELETE: Deletar uma informação no backend
  */

const express = require('express');

const app = express();

app.get('/users', (request, response) => {
  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Adriano Souza'
  });
});

app.listen(3333);