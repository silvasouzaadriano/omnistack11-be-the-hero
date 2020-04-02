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
   */

  const express = require('express');

  const app = express();
  
  app.get('/users/:id', (request, response) => {
    const params = request.params;
    return response.json({
      evento: 'Semana OmniStack 11.0',
      id: `${params.id}`
    });
  });
  
  app.listen(3333);