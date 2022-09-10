const express = require("express");
const validator = require("../middlewares/validationMiddleware");
const userValidate = require("../validations/signUpValidation");
const User = require('../models/SignUp');
const bcrypt = require('bcrypt');
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
const emailSender = require('../utils/emailSender');
const config = require('../config/config');
const jwt = require('jsonwebtoken');


const router = express.Router();


router.get('/', [auth, admin], async (req, res) => {
  try {
    const users = await User.find();
    const count = await User.count();

    if(!users) {
      res.status(404).json({
        success: true,
        message: 'There is no user in database!'
      });
    }

    res.status(400).json({
      success: true,
      count: count, 
      data: users
    });
  } catch(err) {
    res.status(500).json({
      success: false,
      message: 'Something bad happend!'
    });
  }
});

// get the new user for sign in 
router.post('/', validator(userValidate), async (req, res) => {
  
  
  // checking for uinquness 
  let savedEmail = await User.findOne({ email: req.body.email });
  if(savedEmail) {
    res.status(400).json({
      success: false,
      message: 'This account already registered!'
    });
    return;
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
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    isVerified: false
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
  
  // adding json web token (JWT);
  const token = user.generateAuthToken();

  if(!token) {
    res.status(500).json({
      success: false,
      message: 'Some thing bad happend! No token generated!'
    });
  }

  // verifying the email (confirm email)
  emailSender(req, token);

  res.status(200).json({
    success: true,
    message: 'user saved successfully.',
    warning: 'Users email is not verified!',
    token: token
  });
});

router.get('/verify-email', async (req, res) => {
  let verfiyToken = req.query.token;
  if(!verfiyToken) {
    return res.status(400).json({
      success: false,
      message: 'Verification failed, No token provided!'
    });
  }

  const decodedJWT = jwt.verify(verfiyToken, config.jwtPrivateKey(process.env.PRIVATEKEY));

  let updatedUser = await User.updateOne({ _id: decodedJWT.id }, {
    $set: {
      isVerified: true
    }
  });

  if(!updatedUser) {
    return res.status(400).json({
      success: false,
      message: 'Something went wrong!'
    });
  }

  res.status(200).send(`
    <h1>The email verified successfully!</h1>
    <h4>Thanks!</h4>
  `);
});


module.exports = router;