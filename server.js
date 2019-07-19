const express = require('express');
const helmet = require('helmet');

const db = require('./data/db-config.js');

const RecipesRouter = require('./recipes/recipes-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/recipes', RecipesRouter);


module.exports = server;