const express = require('express');

const server = express();

// MW
server.use(logger);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(`[${Date.now()}] ${req.method} Request to ${req.originalUrl}`);

  next();
}

module.exports = server;
