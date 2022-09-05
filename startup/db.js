const config = require('../config/config');
const debug = require('debug')('app:debug');
const prod = require('debug')('app:prod');
const mongoose = require('mongoose');

module.exports = function() {
  // connecting to database
  const localDBURL = config.localDBURL('account');
  const cloudDBURL = config.cloudDBURL(process.env.NAME, process.env.PASSWORD)
  mongoose.connect(localDBURL)
    .then((res) => {
      debug('Connected to mongodb database...');
      prod('Connected to mongodb database...')
    })
    .catch((err) => {
      console.error(err);
    });
}