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

// function update(id, product) {
//   return new Promise((resolve, reject) => {
//     const index = products.findIndex((p) => p.id === id);
//     products[index] = { id, ...product };
//     if (process.env.NODE_ENV !== "test") {
//       writeDataToFile("./data/products.json", products);
//     }
//     resolve(products[index]);
//   });
// }

// function remove(id) {
//   return new Promise((resolve, reject) => {
//     products = products.filter((p) => p.id !== id);
//     if (process.env.NODE_ENV !== "test") {
//       writeDataToFile("./data/products.json", products);
//     }
//     resolve();
//   });
// }

module.exports = {
  getAllInterns,
  getIntern,
  createIntern,
};
