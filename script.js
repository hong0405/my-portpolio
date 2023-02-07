const nodemailer = require("nodemailer");

async function sendEmail(to, subject, text) {
  let transporter = nodemailer.createTransport({
    host: "smtp.naver.com",
    port: 587,
    secure: false,
    auth: {
      user: "wannab_cool@naver.com",
      pass: "!dhrndh12"
    }
  });

  let info = await transporter.sendMail({
    from: "wannab_cool@naver.com",
    to,
    subject,
    text
  });

  console.log("Message sent: %s", info.messageId);
}

sendEmail("receiver_email@example.com", "Subject", "Hello World").catch(console.error);
