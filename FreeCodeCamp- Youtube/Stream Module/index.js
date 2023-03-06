const { Console } = require("console");
const fs = require("fs");
const http = require("http");

const server = http.createServer();

// Old Manner - 1st Way

// server.on("request", (req, res) => {
//   fs.readFile("./file.txt", "utf8", (err, data) => {
//     if (err) {
//       return console.log(err);
//     } else {
//       res.end(data);
//     }
//   });
// });

// Streaming Manner -> 2nd Way

// server.on("request", (req, res) => {
//   const rstream = fs.createReadStream("./file.txt");
//   console.log("Requsted...");
//   rstream.on("error", (err) => {
//     console.log("Error!!! Encountered");
//     res.end("Error!! File Not Found");
//   });
//   rstream.on("data", (chunkdata) => {
//     console.log("Data incoming");
//     res.write(chunkdata);
//   });

//   rstream.on("end", () => {
//     res.end();
//   });
//});

server.on("request", (req, res) => {
  const rstream = fs.createReadStream("./file.txt");
  rstream.pipe(res);
});

server.listen(8000);
