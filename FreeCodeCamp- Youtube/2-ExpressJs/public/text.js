var http = require('http');
var server = http.createServer(function (req,res) {
  res.end("Hello World");
});

server.listen(5000);

var count = 4;
var countdownInterval = setInterval(function() {
  console.log(count);
  count--;
  if (count === 0) {
    clearInterval(countdownInterval);
    server.close(function() {
      console.log("Server closed");
    });
  }
}, 1000);