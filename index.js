const express = require('express');
const server = express();

async function runServer() {
  await require('./db').connect();
  server.use('/api/v1/portfolios', require('./routes/portfolios.js'));

  const PORT = parseInt(process.env.PORT, 10) || 3001;
  server.listen(PORT, (err) => {
    if (err) {
      console.error(err);
    }
    console.log('server ready on port:', PORT);
  });
}

runServer();
