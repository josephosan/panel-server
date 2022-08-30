const express = require("express");
const auth = require('../middlewares/auth');

const router = express.Router();


router.get('/', auth, (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Home works'
  });
});


module.exports = router;