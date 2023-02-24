const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// const logger = (req, res, next) => {
//   const method = req.method;
//   const url = req.url;
//   const time = new Date().getFullYear();
//   console.log(method, url, time);
//   next();
// };

// app.get("/", logger, (req, res) => {
//   res.send("Hello World Konichiwa");
// });

// app.use(logger); //order should maintained // it gonna apply to all since the path is not passed

//app.use("/api", logger); // This will only work for /api/x where x can be any url for exmple : /api,/api/product,/api/items/fd,etc
// if we pass the path like this then it gonna apply to anything that comes after the url passed

// app.use([logger, authorize]); // will excute in order of array means first  comes first servers fashion

app.get("/", (req, res) => {
  res.send("Hello World Konichiwa");
});

app.get("/about", (req, res) => {
  res.send("About");
});
app.get("/api/products", [authorize, logger], (req, res) => {
  res.send("Products");
});
app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.listen(5000, () => console.log("Server is listening on 5000......"));
