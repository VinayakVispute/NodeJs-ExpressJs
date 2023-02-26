const express = require("express");

const router = express.Router();

let { people } = require("../data");


router.get("/", (req, res) => {
  console.log(people);
  return res.status(200).json({ success: true, data: people });
});

router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please Provide neme value" });
  } else {
    return res.status(201).json({ success: true, person: name });
  }
});

router.post("/postman", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "You are Wrong User.....Buddy" });
  } else {
    return res.status(201).json({ success: true, data: [...people, name] });
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No Person Found with ${id}` });
  } else {
    const newPerson = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name;
      }
      return person;
    });
    res.status(200).json({ succeess: true, data: newPerson });
  }
});

router.delete("/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));

  if (!person) {
    return res
      .status(404)
      .json({
        success: false,
        msg: `No Person Found with id ${req.params.id}`,
      });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: newPeople });
});


module.exports = router;
