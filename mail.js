const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const dotenv = require('dotenv');
dotenv.config();

const auth = {
        auth: {
            api_key: process.env.API_KEY,
            domain: process.env.DOMAIN
        }
    };

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
      from: "anneka498@gmail.com",
      to: email,
      subject: subject,
      text: text
  };

  transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
          cb(err, null);
      } else {
          cb(null, data);
      }
  });
}

module.exports = sendMail;
