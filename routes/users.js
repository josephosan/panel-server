const express = require("express");
const validator = require("../middlewares/validationMiddleware");
const userValidate = require("../validations/signUpValidation");


const router = express.Router();


router.get('/', (req, res) => {
  res.send('users works');
});

// get the new user for sign in 
router.post('/', validator(userValidate), (req, res) => {
  res.send('users post works');
});


module.exports = router;