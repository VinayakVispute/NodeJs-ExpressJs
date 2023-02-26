const express = require('express');
const router =  express.Router()

router.post("/", (req, res) => {
    const { name } = req.body;
    if (name) {
      return res.status(200).send(`Welcome to the Deck Caption ${name}`);
    } else {
      return res.status(401).send("Wrong User Please Try Again");
    } 
});

module.exports = router



