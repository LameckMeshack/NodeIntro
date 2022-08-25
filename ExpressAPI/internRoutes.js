import express from "express";
const router = express.Router();

const interns = [
  {
    id: 1,
    name: "John Doe",
    location: "Cysuite",
  },
  {
    id: 2,
    name: "Sonwar",
    location: "RiverRand",
  },
];
// all routes will be prefixed with /users

router.get("/", (req, res) => {
  res.send(interns);
});

router.get("/:id", (req, res) => {
  const intern = interns.find((c) => c.id === parseInt(req.params.id));
  if (!intern)
    res.status(404).send("The intern with the given ID was not found.");
  res.send(intern);
});

router.post("/", (req, res) => {
  const intern = {
    id: interns.length + 1,
    name: req.body.name,
    location: req.body.location,
  };
  interns.push(intern);
  res.send(intern);
});

router.put("/:id", (req, res) => {
  const intern = interns.find((c) => c.id === parseInt(req.params.id));
  if (!intern)
    res.status(404).send("The intern with the given ID was not found.");
  intern.name = req.body.name;
  intern.location = req.body.location;
  res.send(intern);
});

router.delete("/:id", (req, res) => {
  const intern = interns.find((c) => c.id === parseInt(req.params.id));
  if (!intern)
    res.status(404).send("The intern with the given ID was not found.");
  const index = interns.indexOf(intern);
  interns.splice(index, 1);
  res.send(intern);
});

export default router;
