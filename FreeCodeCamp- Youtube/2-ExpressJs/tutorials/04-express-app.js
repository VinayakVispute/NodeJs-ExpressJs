const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./public"));

//we can put index.html in public folder and omit below code
//start

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

//end
app.all("*", (req, res) => {
  res.status(404).send("<h1>Error!!! 404 File Not Found!</h1>");
});

app.listen(5000, () => {
  console.log("Server is Listening on port 5000....");
});
