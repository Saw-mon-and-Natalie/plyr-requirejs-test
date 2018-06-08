const express = require('express');
const app = express();

const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/[a-z]*', (req, res) => {
  res.sendFile(path.join(__dirname + req.path));
});

app.listen(8080);
console.log("Running at Port 8080");