const mongoose = require('mongoose');

const SignUp = mongoose.model('Users', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlenght: 2,
    maxlength: 20,
    unique: true
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
    maxlength: 12
  }
}));

module.exports = SignUp;