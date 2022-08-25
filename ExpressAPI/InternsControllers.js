let interns = [];

export const getUsers = (req, res) => {
  res.send(interns);
};

export const createUser = (req, res) => {
  const intern = {
    id: interns.length + 1,
    name: req.body.name,
    location: req.body.location,
  };
  interns.push(intern);
  res.send(intern);
};

export const getUser = (req, res) => {
  const intern = interns.find((c) => c.id === parseInt(req.params.id));
  if (!intern)
    res.status(404).send("The intern with the given ID was not found.");
  res.send(intern);
};

export const updateUser = (req, res) => {
  const intern = interns.find((c) => c.id === parseInt(req.params.id));
  if (!intern)
    res.status(404).send("The intern with the given ID was not found.");
  intern.name = req.body.name;
  intern.location = req.body.location;
  res.send(intern);
};

export const deleteUser = (req, res) => {
  const intern = interns.find((c) => c.id === parseInt(req.params.id));
  if (!intern)
    res.status(404).send("The intern with the given ID was not found.");
  const index = interns.indexOf(intern);
  interns.splice(index, 1);
  res.send(intern);
};
