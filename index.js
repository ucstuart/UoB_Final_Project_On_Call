const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const {security} = require("./security");
const { createTransport, getTestMessageUrl } = require('nodemailer'); 
const port = 3003;
const corsOptions={
  origin:'*',
  Credential:true,
  optionSuccessStatus:200,
}
var message = '';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public')); //new move html into public folder
app.use(express.json());  //new
app.use(cors(corsOptions)) //new

/* imported from x4 file */
function sendMessage(name,email,mobileNumber,OrderNo){
  let transporter = createTransport({
    host: security.host,
    port: 465,
    secure: true,
    auth: {
        user: security.user,
        pass: security.password
    }
  });
  if (name == ''){
    name = 'Customer';
  }
  let mailOptions = {};
  
  if (email != ''){
    //setup email data with unicode symbols
      mailOptions = {
        from: '"Pixie Meals" <uob@uchelpdesk.co.uk>', // sender address
        // to: 'Email Address', // list of receivers
        to:  `${email}`, // list of receivers
        subject: `Your order ${OrderNo} is ready.`, // Subject line
        text: `Dear ${name}, 
              Enjoy your Pixie Meal!. We look forward to your next visit.`, // plain text body
        //html: '<b>Hello world?</b>' // html body
      };
  }else if (mobileNumber != ''){
    //setup text data with unicode symbols
      mailOptions = {
        from: '"Pixie Meals" <uob@uchelpdesk.co.uk>', // sender address
        // to: 'Email Address', // list of receivers
        to:  `${mobileNumber}@ucsms.co.uk`, // list of receivers
        subject: 'Hello', // Subject line
        text: `Dear ${name} , Your order ${OrderNo} is ready. Enjoy your Pixie Meal!`, // plain text body
        //html: '<b>Hello world?</b>' // html body
      }
  } 

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', getTestMessageUrl(info));
  });
}


app.get('/info/:dynamic', function(req, res) {
  const {dynamic} = req.params
  const {key} = req.query
  console.log(dynamic, key)
  res.status(200).json({info: name})
});

app.post('/', function(req, res){
  const {name,email,mobileNumber,OrderNo} = req.body
  if (!name){
    return res.status(400).send({status: parcel + 'definitely failed'})
  }
  res.status(200).send({status: 'received ' + name})
  message = name +' '+email+' '+mobileNumber+' '+OrderNo
  
  sendMessage(name,email,mobileNumber,OrderNo);
});

app.listen(port, function () {
  console.log(`Node server is runing at port:${port}`);
});
