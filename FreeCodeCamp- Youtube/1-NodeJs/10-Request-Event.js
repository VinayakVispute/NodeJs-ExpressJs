const http = require("http");

// Using Event Emitter API

const server = http.createServer();

// emits request event
// It Subscribes to it / listen to it / respond to it

server.on("request", (req, res) => {
  res.end("Welcome Habbi to Vinayak's OG Worlds Lol");
});

server.listen(5000);
