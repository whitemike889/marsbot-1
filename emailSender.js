
//Top level object
var emailSender = {};
/*
nodemailer
*/
var nodemailer = require('nodemailer');
var wellknown = require('nodemailer-wellknown');    

var transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'marsbothol@outlook.com',
        pass: 'marsmission97' //password to account to be given at event
    }
});

emailSender.sendEmail = function(recipientEmail, callback)
{
}

emailSender.sendEmail = function(recipientEmail, callback)
{
    //Define email options and structure
    var mailOptions =
    {
        from: '"Mars Bot" <marsbothol@outlook.com>',
        to: recipientEmail, //insert the recipientEmail parameter
        subject: 'Message from Mars',
        text: 'Hello from Mars Bot!' 
    }

    //Send email using the options
    transporter.sendMail(mailOptions, function(err, info){
        if(!err)
        {
            console.log('Message successfully sent: ' + info.response);
            callback(null);
        }
        else
        {
            console.log(err);
            callback(err);
        }
    });
}

module.exports = emailSender;