const nodemailer = require('nodemailer');
const config = require('../config/config');

module.exports = async function(reqOBJ, token) {
  console.log();
  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'josephosan1381@gmail.com',
      pass: config.emailAuthPassword()
    }
  });

  const mailOptions = {
    from: 'Verify your email <josephosan1381@gmail.com>',
    to: reqOBJ.body.email,
    subject: 'Email verification',
    html: `
      <h1>${reqOBJ.body.name}, Please verfiy your email.</h1>
      <a href="https://${reqOBJ.headers.host}/users/verify-email?token=${token}">Verfiy</a>
    `
  };

  return await transporter.sendMail(mailOptions);
};