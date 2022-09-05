
module.exports = async function(err, req, res, next) {
  res.status(500).json({
    success: false,
    message: 'Something went wrong! FEHM.',
    errMessage: err.message
  });
  next();
}