const express = require("express");
const validator = require("../middlewares/validationMiddleware");
const loginValidate = require("../validations/loginValidation");
const User = require('../models/SignUp');
const bcrypt = require('bcrypt');


const router = express.Router();


router.get('/', (req, res) => {
  res.send('logins works');
});

// get the users data for login 
router.post('/', validator(loginValidate), async (req, res) => {
  try {
    // checking for existsnce
    let user = await User.findOne({ email: req.body.email });
    if(!user) {
      res.status(400).json({
        success: false,
        message: 'Invalid Email or Password!'
      });
      return;
    }

    // checking password
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) {
      res.status(400).json({
        success: false,
        message: 'Invalid Email or Password!'
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'loged in successfully.'
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