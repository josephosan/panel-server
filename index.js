const express = require('express');
const debug = require('debug')('app:debug');
const prod = require('debug')('app:prod');
const app = express();

require('express-async-errors');
require('./startup/config')();
require('./startup/db')();
require('./startup/routes')(app);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  debug('Listening on port ' + PORT + '...');
  prod('Listening on port ' + PORT + '...');
});
