const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/**
 * The security module cors define who will could access the aplication.
 * In devlopment we may keep the configuration open (using the localhost). However,
 * for production its necessary add the property origin and inform the correct URL
 * Example:
 *  app.use(cors({
 *    origin: 'http://myapp.com'
 *  }))
 */
app.use(cors());

app.use(express.json());
app.use(routes);
  
app.listen(3333);