const express = require('express');
const app = express();
const fs = require('fs');
// var path = require('path');

// write your code below

// how to do the following with and without express.static?
// how to change response headers and response status codes?

// serve the index.html page when / is visited

// serve the secret.html page when /secret is visited

// serve styles.css in public when requested by index.html

// now uncomment line 6 and comment line 5 in index.html
// how would the get request for styles.css change?

// learning to traverse files
// serve the outside.html page when /outside is visited

// serve the nothinghere.html page when /nothinghere is visited

// what route would you use access index.html if server.js was inside its own folder
// ie server/server.js

// Answer: path = __dirname + ./../public/index.html

// add 404 page not found handler for all other routes

app.listen(3000);
console.log('Listening on port: 3000');
