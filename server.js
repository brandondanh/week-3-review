const express = require('express');
const app = express();
const fs = require('fs');

// write your code below

// how to do the following with and without express.static?

// serve the index.html page when / is visited
// serve the secret.html page when /secret is visited
// server the otherindex.html in alsopublic folder when /otherindex is visited
// serve styles.css in public when requested by index.html

// now uncomment line 6 and comment line 5 in index.html
// serve styles.css in assets/css when requested by index.html using express.static

// learning to traverse files
// serve the outside.html page when /outside is visited
// serve the nothinghere.html page when /nothinghere is visited

// how to change response headers and response status codes?

// add 404 page not found handler for all other routes

app.listen(3000);
