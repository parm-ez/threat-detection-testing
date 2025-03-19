// postinstall.js
const fs = require('fs');

// Simulate "malicious" behavior by writing a file
fs.writeFileSync('MALICIOUS_PAYLOAD.txt', 'This was executed during install!\n');

console.log('Malicious script executed!');
