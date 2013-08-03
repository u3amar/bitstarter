evar express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

var input = fs.readFileSync('index2.html', "utf-8");

app.get('/', function(request, response) {
  response.send(input);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
