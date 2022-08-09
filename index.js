const express = require('express');
const server = express();
const config = require('./config/dev');

const mongoose = require('mongoose');

mongoose.connect(
  config.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Connected to DB');
    }
  }
);

server.use('/api/v1/portfolios', require('./routes/portfolios.js'));

const PORT = parseInt(process.env.PORT, 10) || 3001;
server.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  }
  console.log('server ready on port:', PORT);
});
