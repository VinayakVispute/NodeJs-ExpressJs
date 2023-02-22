const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("User Just send Request...");
  res.status(200).send("Welocme to HomePage 2");
});

app.get("/about", (req, res) => {
  console.log("About Page Request Received");
  res.status(200).send("Welcome to About Page");
});

app.all("*", (req, res) => {
  console.log("Error!!!!");
  res.status(404).send("<h1>Error Encounterred </h1>");
});
app.listen(5000, () => {
  console.log("Express Server is Started .....");
});

// app.get;
// app.post;
// app.put;
// app.delete;
// app.all;
// app.use;
// app.listen;
