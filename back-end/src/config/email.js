const nodemailer = require("nodemailer");
const fs = require("fs");
require("../config/dotenv")();
const mail = process.env.MAIL_SENDER;
const password = process.env.MAIL_PASSWORD;

const email = nodemailer.createTransport({

  service: "gmail",

  auth: {
    user: mail, 
    pass: password
  }
});


module.exports = {

  email,
  
};