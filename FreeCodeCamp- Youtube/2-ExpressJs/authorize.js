const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "Vinayak") {
    req.user = { name: "Vinayak", id: 1 };
    next();
  } else {
    res.status(401).send("Unathorized");
  }
};

module.exports = authorize;
