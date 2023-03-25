const {security} = require("./security.js");

console.log(security.asteriskip); // asterisk IP address
console.log(security.amiusername); // asterisk ami username
console.log(security.amipassword); // asterisk ami password
console.log(security.host); // email host fqdn
console.log(security.user); // email username
console.log(security.password); // email password

const { createTransport, getTestMessageUrl } = require('nodemailer');


// create reusable transporter object using the default SMTP transport
let transporter = createTransport({
    host: ${security.host},
    port: 465,
    secure: true,
    auth: {
        user: ${security.user},
        pass: ${security.password}'
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Sender Name" <uob@uchelpdesk.co.uk>', // sender address
    to: 'Email Address', // list of receivers
    subject: 'Hello', // Subject line
    text: 'Hi Nat', // plain text body
    html: '<b>Hello world?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', getTestMessageUrl(info));
});
