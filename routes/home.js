const express = require("express");

const router = express.Router();


router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Home works'
  });
});


module.exports = router;