const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {
  const data = request.body;

  console.log(data.name);

  return response.json({data});
});

module.exports = routes;