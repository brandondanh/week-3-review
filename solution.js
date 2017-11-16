const express = require('express');
const app = express();
const fs = require('fs');
var path = require('path');

// write your code below

// how to do the following with and without express.static?
// how to change response headers and response status codes?

// // serve the index.html page when / is visited
app.get('/', function (req, res) {
  res.set('Content-Type', 'content-type: text/html; charset=UTF-8');
  res.set(200);
  res.sendFile(path.join(__dirname, '/public/index.html'));
  // Note: using path.join(__dirname, '/public/index.html') is best practice
  // alternative is using __dirname + '/public/index.html'
});

// // serve the secret.html page when /secret is visited
app.get('/secret', function (req, res) {
  res.set('Content-Type', 'content-type: text/html; charset=UTF-8');
  res.set(200);
  res.sendFile(path.join(__dirname, '/public/secret.html'));
});

// // serve styles.css in public when requested by index.html
app.get('/styles.css', function (req, res) {
  res.set('Content-Type', 'content-type: text/css; charset=UTF-8');
  res.set(200);
  res.sendFile(path.join(__dirname, '/assets/css/styles.css'));
});

// // now uncomment line 6 and comment line 5 in index.html
// // how would the get request for styles.css change?
app.get('/styles.css', function (req, res) {
  res.set('Content-Type', 'content-type: text/css; charset=UTF-8');
  res.set(200);
  res.sendFile(path.join(__dirname, '/css/styles.css'));
});

// // learning to traverse files
// // serve the outside.html page when /outside is visited
app.get('/outside', function (req, res) {
  res.set('Content-Type', 'content-type: text/html; charset=UTF-8');
  res.set(200);
  res.sendFile(path.join(__dirname, '/outside.html'));
});

// // serve the nothinghere.html page when /nothinghere is visited
app.get('/nothinghere', function (req, res) {
  res.set('Content-Type', 'content-type: text/html; charset=UTF-8');
  res.set(200);
  res.sendFile(path.join(__dirname, '/public/deep/deeper/nothing.html'));
});

// // what route would you use access index.html if server.js was inside its own folder
// // ie server/server.js

// // path = __dirname + ./../public/index.html

// // add 404 page not found handler for all other routes
app.get('*', function (req, res) {
  res.set('Content-Type', 'content-type: text/html; charset=UTF-8');
  res.set(404);
  res.sendFile(path.join(__dirname, '/public/404.html'));
});

/****************************************************************************/
// the express.static way
// note that express.static serve STATIC files, so not perfectly analogous
// to the previous server set-up.

// Partial Solution

// app.use('/css', express.static('assets/css'));
app.use('/', express.static('assets')); // or use previous line
app.use('/', express.static('public'));
app.get('*', function (req, res) {
  res.set('Content-Type', 'content-type: text/html; charset=UTF-8');
  res.set(404);
  res.sendFile(path.join(__dirname, '/public/404.html'));
});

app.listen(3000);
console.log('Listening on port: 3000');
