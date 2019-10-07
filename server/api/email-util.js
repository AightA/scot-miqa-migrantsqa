const emailConfig = require("../services/email-config")();
const mailgun = require("mailgun-js")(emailConfig);

exports.sendEmail = (recipient, message, attachment) =>
  new Promise((resolve, reject) => {
    const data = {
      from: "Youssef sadek <youssef.sadek910@gmail.com>",
      to: recipient,
      subject: message.subject,
      text: message.text
      // inline: attachment,
      // html: message.html
    };

    mailgun.messages().send(data, error => {
      if (error) {
        console.log("error====> ", error);
        return reject(error);
      }
      return resolve();
    });
  });
