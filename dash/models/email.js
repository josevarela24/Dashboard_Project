/*'use strict';

userLoginSchema.foo = function() {
const nodemailer = require('nodemailer');
// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
           auth: {
            user: 'naomihbeltrand@gmail.com', // generated ethereal user
            pass: '3583nhbJA' // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Naomi" <naomihbeltrand@gmail.com>', // sender address
        to: 'naomihbeltrand@gmail.com', // list of receivers
        subject: 'Confirm Registration', // Subject line
        text: 'Select the button below to confirm registeration', // plain text body
        html: '<form> http://localhost:3000/confirm" /></form>' 
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});
}*/