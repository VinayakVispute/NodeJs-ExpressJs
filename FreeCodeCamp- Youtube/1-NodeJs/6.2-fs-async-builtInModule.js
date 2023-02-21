// the fs module is used for interacting with the file system. There are two different types of methods in the fs module: synchronous and asynchronous.

//async

const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, results) => {
  if (err) {
    console.log(err);
    return;
  }
  //   console.log(results);
  const first = results;
  readFile("./content/second.txt", "utf-8", (err, results) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = results;
    writeFile(
      "./content/result-async.txt",
      `Here is result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
