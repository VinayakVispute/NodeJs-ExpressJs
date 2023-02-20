const { readFile } = require("fs");

console.log("Started First Task");
// Check File Path !!!!!!
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(result);
    console.log("completed First Tas");
  }
});

console.log("Starting Next Task");
