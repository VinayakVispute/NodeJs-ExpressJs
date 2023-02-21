console.log("ExpressJs is Just Started");

const {readFileSync} = require('fs');
const http = require("http");


//get all files

const homePage = readFileSync('./index.html')


const server = http.createServer((req, res) => {
  // console.log(req.url)
  // console.log(req.method)

  const url = req.url;

  if (req.url == "/") {
    //HomePage

    res.writeHead(200, { "content-type": "text/html" });

    // res.write("<marquee><h1>HomePage</h1></marquee>");

    res.write(homePage)

    res.end();
  } else if (req.url == "/about") {
    //About Page
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<marquee><h1>about</h1></marquee>");
    res.end();
  } else {
    //Error Page
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<marquee><h1>ERROR!!!! 404 ERROR!!!</h1></marquee>");
    res.end();
  }
});

server.listen(8000);
