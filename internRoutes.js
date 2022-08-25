const interns = require("./internData.js");
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

function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4(), ...product };
    products.push(newProduct);
    if (process.env.NODE_ENV !== "test") {
      writeDataToFile("./data/products.json", products);
    }
    resolve(newProduct);
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
};
