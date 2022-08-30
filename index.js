const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const debug = require('debug')('app:debug');
const home = require('./routes/home');
const config = require('./config/config');

const app = express();


// connecting to database
const localDBURL = config.localDBURL();
mongoose.connect(localDBURL)
  .then((res) => {
    debug('Connected to mongodb database...');
  })
  .catch((err) => {
    console.error(err);
  });


// using middlewares
app.use(express.json());
app.use(morgan('tiny'));


// defining routes
app.use('/', home);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  debug('Listening on port ' + PORT + ' ...');
});
