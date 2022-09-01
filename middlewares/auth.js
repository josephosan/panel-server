const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = function (req, res, next) {
  const token = req.header('X-Auth-Token');
  
  if(!token) {
    console.log('invalid token');
    res.status(401).json({
      success: false,
      message: 'Access denied. No token provided.'
    });
    return;
  }

  try {
    const decoded = jwt.verify(token, config.jwtPrivateKey(process.env.PRIVATEKEY));
    req.user = decoded;
    next();
  } catch(ex) {
    res.status(400).json({
      success: false,
      message: 'Invalid token!'
    });
  }
}
