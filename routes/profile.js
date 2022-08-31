const express = require("express");
const auth = require('../middlewares/auth');
const User = require('../models/SignUp');

const router = express.Router();


router.get('/', [auth], async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id });

    if(!user) {
      res.status(404).json({
        success: false,
        message: 'The user with the given id not found!'
      });
      return;
    }

    res.status(200).json({
      success: true,
      userData: {
        name: user.name,
        email: user.email
      }
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