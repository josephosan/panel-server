const debug = require('debug')('app:debug');
const prod = require('debug')('app:prod');


module.exports = function() {
  prod('Starting up with prod environment...');
  if(!process.env.PRIVATEKEY) debug('Please provide PRIVATEKEY');
  if(!process.env.NAME) debug('Please provide NAME');
  if(!process.env.PASSWORD) debug('Please provide PASSWORD');
  if(!process.env.PORT) debug('Please provide PORT');
  if(!process.env.NODE_ENV) debug('Please provide NODE_ENV');
  if(process.env.NODE_ENV === 'dev') debug('Starting in development mode.');
}