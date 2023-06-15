const nodemailer = require("nodemailer");
const Email = require('email-templates');
const path = require('path');

module.exports = {
  sendEmail: async function ({ to, subject, attributes, template }) {
    const { host, port, from } = sails.config.custom.email

    const transporter = nodemailer.createTransport({
      port: port,
      host: host,
      ignoreTLS: true,
    });

    const email = new Email({
      message: {
        from: from
      },
      transport: transporter,
      views: {
        options: {
          extension: 'ejs' // <---- HERE
        }
      }
    });


    const emailHtml = await email.render({
      path: path.join(__dirname, "../../views/emails/verifyEmail")
    }, attributes)

    await transporter.sendMail({
      from: from, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      text: "Hello world?", // plain text body
      html: emailHtml, // html body
    });;


  }
}
