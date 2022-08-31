const validation = (schema) => async (req, res, next) => {

  try {

    if(Object.keys(req.body).length === 0) {
      res.status(400).json({
        success: false,
        message: 'Please fill out the required fields!'
      });
      return;
    };


    await schema.validate(req.body);
    next();
    
  } catch (err) {
    return res.status(400).json({
      success: false,
      errType: 'validationMiddleware',
      errMessage: err.message
    });
  }
}

module.exports = validation;