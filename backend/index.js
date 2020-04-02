/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * GET: Buscar/Listar uma informação do backend
  * POST: Criar uma informação no backend
  * PUT: Alterar uma informação no backend
  * DELETE: Deletar uma informação no backend
  */

  /**
   * Tipos de parâmetros
   * 
   * Query: Parâmetros nomeados enviados na rota após "?".
   *        Normalmente utilizados para: filtros, paginação
   * 
   * Route Params: São parâmetros utilizados para identificar recursos
   * 
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   * 
   */

  const express = require('express');

  const app = express();

  app.use(express.json());
  
  app.post('/users', (request, response) => {
    const data = request.body;

    return response.json({data});
  });
  
  app.listen(3333);