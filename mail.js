const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const MailMessage = require('nodemailer/lib/mailer/mail-message');

const auth = {
    auth: {
        api_key: 'df7d6da8bd22daac94031846cfb1f989-e438c741-b078eaf4',
        domain:'sandboxd7e0ac949ce144f6a8d94cee55c5530c.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) =>{
    const mailOptions = {
        from: email,
        to: 'ojobabajide629@gmail.com',
        subject,
        text
    };
    
    transporter.sendMail(mailOptions, function(err, data) {
        if(err) {
           cb(err, null);
        } else {
          cb(null, data);
        }
    });
}

module.exports = sendMail;