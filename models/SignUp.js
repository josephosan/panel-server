const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const signUpSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlenght: 2,
    maxlength: 20,
    unique: false
  },
  email: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlenght: 8,
    maxlength: 255,
    unique: false
  },
  isAdmin: Boolean
});

signUpSchema.methods.generateAuthToken = function() {
  const privateKey = config.jwtPrivateKey(process.env.PRIVATEKEY);
  return jwt.sign({ id: this._id, isAdmin: this.isAdmin }, privateKey);
}

const SignUp = mongoose.model('Users', signUpSchema);

module.exports = SignUp;