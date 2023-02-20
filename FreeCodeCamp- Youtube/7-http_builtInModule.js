const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello! Welcome to our Homepage");
  } else if (req.url === "/about") {
    res.end("Here is our About Page");
  } else {
    res.end(`
    <h1>Oops!! Error 404!!! Page Not Found </h1>
    `);
  }
});

server.listen(5000);
