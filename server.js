var express = require('express');
var app = express();

//create a route
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//create hello codex route
app.get('/hello', function(req, res) {
    res.send('Hello Codex!');
});
//start server
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
