const nodemailer = require("nodemailer")

// CREDENTIALS SMTP SERVICE 
var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4716aeb4e917e5",
      pass: "f08c31ce3c0288"
    }
  });