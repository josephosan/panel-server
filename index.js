const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const debug = require('debug')('app:debug');
const home = require('./routes/home');
const config = require('./config/config');
const users = require('./routes/users');
const logins = require('./routes/logins');
const cors = require('cors');
const profile = require('./routes/profile');
const dashboard = require('./routes/dashboard');
const tables = require('./routes/tables');
const icons = require('./routes/icons');

const app = express();

if(process.env.NODE_ENV === 'dev') debug('Starting in development mode.');

// connecting to database
const localDBURL = config.localDBURL('account');
const cloudDBURL = config.cloudDBURL(process.env.NAME, process.env.PASSWORD)
mongoose.connect(cloudDBURL)
  .then((res) => {
    debug('Connected to mongodb database...');
  })
  .catch((err) => {
    console.error(err);
  });


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

const PORT = process.env.PORT;
app.listen(PORT, () => {
  debug('Listening on port ' + PORT + '...');
});
