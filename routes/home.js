const express = require("express");
const auth = require('../middlewares/auth');
const User = require('../models/SignUp');

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: 'Home works'
    });
  } catch(err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: 'Something bad happend!'
    });
  }

});


module.exports = router;