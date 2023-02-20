const path = require("path");

console.log(path.sep);

const filepath = path.join("/content", "subfolder", "test.txt");
console.log(filepath);

//module that returns the last portion of a file path string, which represents the file or directory name.
const base = path.basename(filepath);
console.log(base);
// returns the directory name of a file path, excluding the last portion of the path (i.e., the basename).
console.log(path.dirname(filepath));

//returns absolute paths
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
