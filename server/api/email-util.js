const mailgun = require("mailgun-js");
exports.sendEmail = (recipient, message, attachment) =>
  new Promise((resolve, reject) => {
    // const DOMAIN = "sandbox31ad9b239544492b8277169c4c7b343c.mailgun.org";
    const DOMAIN = "miqa.herokuapp.com";
    const mg = mailgun({
      apiKey: "8554c25a964940de4272e37f98dd5d5f-af6c0cec-5bb8acbf",
      domain: DOMAIN
    });
    const data = {
      from: "<info@Miqa.com>",
      to: recipient,
      subject: message.subject,
      text: message.text,
      inline: attachment,
      html: message.html
    };
    mg.messages().send(data, function(error, body) {
      if (error) {
        return reject(error);
      }
      console.log(body);
      return resolve(body);
    });
  });
