const { createReadStream } = require("fs");

const stream = new createReadStream("./content/fidle.txt", {
  highWaterMark: 1000,
  encoding: "utf-8",
});
stream.on("data", (chunks) => {
  //   console.log(chunks);
});

stream.on("error", (err) => {
  console.log("Error Found !!");
});
