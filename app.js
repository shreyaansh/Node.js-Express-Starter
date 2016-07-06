/*eslint-env node*/

var express = require('express');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// start server on the specified port and binding host
app.listen(3000, function() {
  // print a message when the server starts listening
  console.log("server starting on localhost:" + 3000);
});
