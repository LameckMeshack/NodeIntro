const interns = require("./internData.js");
const { writeDataToFile } = require("./utils.js");
function getAllInterns() {
  return new Promise((resolve, reject) => {
    resolve(interns);
  });
}

function getIntern(id) {
  return new Promise((resolve, reject) => {
    const intern = interns.find((i) => i.id === id);
    resolve(intern);
  });
}

function createIntern(intern) {
  return new Promise((resolve, reject) => {
    const newIntern = { id: Math.floor(Math.random() * 10 + 5), ...intern };
    interns.push(newIntern);

    writeDataToFile("./data/interns.json", interns);

    resolve(newIntern);
  });
}

function updateIntern(id, intern) {
  return new Promise((resolve, reject) => {
    const index = interns.findIndex((i) => i.id === id);
    interns[index] = { id, ...intern };

    writeDataToFile("./data/interns.json", interns);

    resolve(interns[index]);
  });
}

function deleteIntern(id) {
  return new Promise((resolve, reject) => {
    interns = interns.filter((i) => i.id !== id);

    writeDataToFile("./data/interns.json", interns);

    resolve();
  });
}

module.exports = {
  getAllInterns,
  getIntern,
  createIntern,
  updateIntern,
  deleteIntern,
};
