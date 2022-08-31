const express = require("express");
const auth = require('../middlewares/auth');
const User = require('../models/SignUp');

const router = express.Router();


router.get('/', [auth], async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Tables page works properly.'
  });
});


module.exports = router;