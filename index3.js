const {security} = require("./security.js");

console.log(security.asteriskip); // asterisk IP address
console.log(security.amiusername); // asterisk ami username
console.log(security.amipassword); // asterisk ami password
console.log(security.host); // email host fqdn
console.log(security.user); // email username
console.log(security.password); // email password

const net = require('net');

const amiSocket = net.createConnection({
  host:security.asteriskip,
  port:5038,
}, () => {
  console.log('Connected to Asterisk Manager Interface');
  
  // Send login credentials
  const loginCmd = 'Action: Login\r\nUsername: ${amiusername}\r\nSecret: ${amipassword}\r\n\r\n';
  amiSocket.write(loginCmd);

  
  // Send a ping command
  
  const pingCmd = 'Action: Ping\r\n\r\n';
  amiSocket.write(pingCmd);



 // Make a Call and Play an Audio File

 // We can play multiple files by adding & (that took some working out)

//   const originateCallCmd = 'Action: originate\r\nChannel: SIP/Stuart\r\nApplication: playback\r\nData:progress&morning&moron\r\nApplication:WaitExten\r\nExten: 200\r\nContext: phones\r\nPriority: 1\r\nCallerid: "My Caller ID" <200>\r\nTimeout: 30000\r\nAsync: true\r\nVariable: MYVAR1=value1,MYVAR2=value2\r\n\r\n';
 
// This is the code we need to work with for the DTMF input

const originateCallCmd = 'Action: originate\r\nChannel: SIP/Stuart\r\nApplication: playback\r\nData:progress&morning&moron\r\nExten: 200\r\nContext: phones\r\nPriority: 1\r\nCallerid: "My Caller ID" <200>\r\nTimeout: 30000\r\nAsync: true\r\nVariable: MYVAR1=value1,MYVAR2=value2\r\nActionID:12345\r\n\r\nAction: WaitExten\r\nContext:phones\r\nTimeout: 10000\r\n\r\n';

amiSocket.write(originateCallCmd);

const hangupCallCmd = 'Action: Hangup\r\n\r\n';
 amiSocket.write(hangupCallCmd);


// SIP Show Peers Command
// const sipShowPeersCmd = 'Action: SIPpeers\r\n\r\n';
// amiSocket.write(sipShowPeersCmd);

// Show Dial Plan Command
// const showDialPlanCmd = 'Action: ShowDialPlan\r\n\r\n';
// amiSocket.write(showDialPlanCmd);

// Send Logout Command
const loginOffCmd = 'Action: Logoff\r\n\r\n';
amiSocket.write(loginOffCmd);




});


amiSocket.on('data', (data) => {
  console.log(`Received response from AMI: ${data.toString()}`);
});

amiSocket.on('error', (error) => {
  console.error(`Error communicating with AMI: ${error}`);
});

amiSocket.on('end', () => {
  console.log('Disconnected from AMI');
});
