const express = require("express");
const validator = require("../middlewares/validationMiddleware");
const userValidate = require("../validations/signUpValidation");
const User = require('../models/SignUp');
const bcrypt = require('bcrypt');


const router = express.Router();


router.get('/', (req, res) => {
  res.send('users works');
});

// get the new user for sign in 
router.post('/', validator(userValidate), async (req, res) => {
  
  try {
    // checking for uinquness 
    let savedEmail = await User.findOne({ email: req.body.email });
    if(savedEmail) {
      res.status(400).json({
        success: false,
        message: 'This account already registered!'
      });
      return;
    }
  } catch(err) {
    res.status(500).json({
      success: false,
      message: 'Some thing bad happend!',
      errMessage: err.message
    });
  }

  // checking password and the confirm password
  if(req.body.password !== req.body.confirmPassword) {
    res.status(400).json({
      success: false,
      message: 'confirm password does not match!'
    });
    return;
  }

  // calling database
  try {
    let user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    // hashing the password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    user = await user.save();

    if(!user) {
      res.status(500).json({
        success: false,
        message: 'User did not save!',
        errMessage: 'Server error'
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'user saved successfully.'
    });
  } catch(err) {
    res.status(500).json({
      success: false,
      message: 'Some thing bad happend!',
      errMessage: err.message
    });
  }
});


module.exports = router;