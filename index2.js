const {security} = require("./security.js");

console.log(security.asteriskip); // asterisk IP address
console.log(security.amiusername); // asterisk ami username
console.log(security.amipassword); // asterisk ami password
console.log(security.host); // email host fqdn
console.log(security.user); // email username
console.log(security.password); // email password

const net = require('net');

const AMI_HOST = ${security.asteriskip};
const AMI_PORT = 5038;
const AMI_USERNAME = ${security.amiusername};
const AMI_SECRET = ${security.amipassword};

// Create the socket connection to Asterisk AMI
const socket = net.createConnection({ port: AMI_PORT, host: AMI_HOST }, () => {
  console.log('Connected to Asterisk Manager Interface');

  // Send the login command after the socket is connected
  socket.write(`Action: Login\r\nUsername: ${AMI_USERNAME}\r\nSecret: ${AMI_SECRET}\r\n\r\n`);
});

// Listen for data coming back from the socket
socket.on('data', (data) => {
  console.log(`Received data from AMI: ${data.toString()}`);
});

// Listen for any socket errors
socket.on('error', (error) => {
  console.error(`Socket error: ${error}`);
});

function originateCall(channel, extension) {
  const originateMessage = `Action: Originate\r\nChannel: ${channel}\r\nApplication: Playback\r\nData: hello-world\r\nExtension: ${extension}\r\nAsync: true\r\n\r\n`;
  net.write(originateMessage);
}

// Use the function to originate a call
originateCall('SIP/my-sip-trunk/1234567890', '1234');

