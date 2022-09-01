const express = require("express");
const auth = require('../middlewares/auth');
const User = require('../models/SignUp');
const monyData = require("../utils/monyData");
const oilData = require("../utils/oilData");

const router = express.Router();


router.get('/', [auth], async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Dashboard page works properly.'
  });
});

router.get('/monyData', [auth], async (req, res) => {
  try {
    const data = await monyData();

    if(!data) {
      return res.status(400).json({
        success: false,
        message: 'Could not get the data!'
      });
    }

    res.status(200).json({
      success: true,
      data: data
    });
  } catch(err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      errMessage: err.message
    });
  }
});

router.get('/oilData', async (req, res) => {
  try {
    let data = await oilData();

    if(!data) {
      return res.status(400).json({
        success: false,
        message: 'Could not get the data!'
      });
    }

    res.status(200).json({
      success: true,
      data: data
    });
  } catch(err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
      errMessage: err.message
    });
  }
});


module.exports = router;