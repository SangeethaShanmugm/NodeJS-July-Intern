const sgMail = require("@sendgrid/mail");
const dotenv = require("dotenv");
dotenv.config();

// console.log(process.env.SENDGRID_API_KEY);

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: "sangeethashanmugam22@gmail.com", // Change to your recipient
  from: "sanjuriya22@gmail.com", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>We are learning Node.js</strong>",
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
