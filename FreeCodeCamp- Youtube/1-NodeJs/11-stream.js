const { createReadStream } = require("fs");

// default 64kb
// last buffer - remainder
// highWaterMark - control sizez

const stream = new createReadStream("./content/file.txt", {
  highWaterMark: 1000,
  encoding: "utf-8",
});
stream.on("data", (chunks) => {
    console.log(chunks);
});

stream.on("error", (err) => {
  console.log("Error Found !!");
});
