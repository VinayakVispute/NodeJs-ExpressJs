const { Console } = require("console");
const fs = require("fs");
const http = require("http");

const server = http.createServer();

// Old Manner

// server.on("request", (req, res) => {
//   fs.readFile("./file.txt", "utf8", (err, data) => {
//     if (err) {
//       return console.log(err);
//     } else {
//       res.end(data);
//     }
//   });
// });

// Streaming Manner

const rstream = fs.createReadStream("./file.txt");

server.on("request", (req, res) => {
  //   console.log("Requsted...");
  rstream.on("error", (err) => {
    console.log(err);
    res.end("Error!! File Not Found");
  });
  rstream.on("data", (chunkdata) => {
    res.write(chunkdata);
  });

  rstream.on("end", () => {
    res.end();
  });
});

server.listen(8000);
