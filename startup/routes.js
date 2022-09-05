const users = require('../routes/users');
const logins = require('../routes/logins');
const cors = require('cors');
const profile = require('../routes/profile');
const dashboard = require('../routes/dashboard');
const tables = require('../routes/tables');
const icons = require('../routes/icons');
const morgan = require('morgan');
const error = require('../middlewares/errorHandler');
const home = require('../routes/home');
const express = require('express');


module.exports = function(app) {
  // using middlewares
  app.use(express.json());
  app.use(morgan('tiny'));
  app.use(cors());


  // defining routes
  app.use('/', home);
  app.use('/users', users);
  app.use('/login', logins);
  app.use('/profile', profile);
  app.use('/icons', icons);
  app.use('/dashboard', dashboard);
  app.use('/tables', tables);

  // passing error handler
  app.use(error);
};