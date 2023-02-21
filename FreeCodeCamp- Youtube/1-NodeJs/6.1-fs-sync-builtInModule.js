// the fs module is used for interacting with the file system. There are two different types of methods in the fs module: synchronous and asynchronous.

//sync

const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
  "./content/result-sync.txt",
  `Here is the results : ${first}, ${second}`,
  { flag: "a" }
);
