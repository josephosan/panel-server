const mongoose = require('mongoose');

const SignUp = mongoose.model('Users', new mongoose.Schema({
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
  }
}));

module.exports = SignUp;