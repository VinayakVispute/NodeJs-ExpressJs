const express = require("express");
const app = express();
const { products } = require("./data.js");

app.get("/", (req, res) => {
  // res.json([{ name: "Vinayak" }, { name: "Jayesh" }]);
  // res.json(products );
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

// app.get("/api/products/1", (req, res) => {
//   const singleProduct = products.find((product) => product.id === 1);
//   //
//   res.json(singleProduct);
// });

app.get("/api/products/:productID", (req, res) => {
  // console.log(req);
  // console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send("<h1>Error Product doesnt Exists</h1>");
  } else {
    return res.json(singleProduct);
  }
  // res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  res.send("Konichiwa World");
});

app.listen(5000, () => console.log("Server is listening on 5000......"));
