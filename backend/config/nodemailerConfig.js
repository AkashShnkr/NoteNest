const nodemailer = require('nodemailer');


// Nodemailer transport configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "aksh21is@cmrit.ac.in",
    pass: "cmrit@123",
  },
});

module.exports = transporter;
