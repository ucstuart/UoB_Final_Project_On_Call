const {security} = require("./security.js");

console.log(security.asteriskip); // asterisk IP address
console.log(security.amiusername); // asterisk ami username
console.log(security.amipassword); // asterisk ami password
console.log(security.host); // email host fqdn
console.log(security.user); // email username
console.log(security.password); // email password


import AmiClient from 'asterisk-ami';

const ami = new AmiClient({
  reconnect: true,
  keepAlive: true,
  emitEventsByTypes: true,
  emitResponsesById: true,
  emitInvalidMessage: true,
  emitUnhandledEvent: true,
  host: ${security.asteriskip},
  port: 5038,
  username: ${security.amiusername},
  password: ${security.amipassword},
});

ami.connect();

ami.on('connect', () => {
  console.log('Connected to Asterisk Manager Interface');

  ami.action({ action: 'Ping' })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

});

ami.on('response', (response) => {
  console.log('Received response from Asterisk Manager Interface:', response);
});

ami.on('event', (event) => {
  console.log('Received event from Asterisk Manager Interface:', event);
});

// console.log('AMI client:', ami);

// ami.send({
//   action: 'Originate',
//   channel: 'SIP/my-sip-trunk/1234567890',
//   application: 'Playback',
//   data: 'hello-world',
//   callerId: 'My Caller ID <1234567890>',
//   variable: {
//     MYVAR1: 'value1',
//     MYVAR2: 'value2',
//   },
// }).then((response) => {
//   console.log('Response from Originate action:', response);
// }).catch((error) => {
//   console.error('Error sending Originate action:', error);
// });


// (async () => {
//   try {
//     const response = await ami.send({
//       action: 'Originate',
//       channel: 'SIP/my-sip-trunk/1234567890',
//       application: 'Playback',
//       data: 'hello-world',
//       callerId: 'My Caller ID <1234567890>',
//       variable: {
//         MYVAR1: 'value1',
//         MYVAR2: 'value2',
//       },
//     });

//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// })();


// ami.send({ action: 'Ping' })
// .then((response) => {
//   console.log(response);
// })
// .catch((error) => {
//   console.error(error);
// });



  