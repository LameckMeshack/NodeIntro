const Interns = require("./internRoutes");

//@desc Get all interns
//@route GET /api/interns/
async function getInterns(req, res) {
  try {
    const interns = await Interns.getAllInterns();

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(JSON.stringify(interns));
  } catch (error) {
    console.log(error);
  }
}

//@desc Get single intern
//@route GET /api/interns/:id
async function getIntern(req, res, id) {
  try {
    const intern = await Interns.getIntern(id);
    if (!intern) {
      //if no intern found
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end(JSON.stringify({ message: "Intern not found" }));
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(JSON.stringify(intern));
    }
  } catch (error) {
    console.log(error);
  }
}
//
//@desc Create new intern
//@route POST /api/interns/
async function createIntern(req, res) {
  try {
    // const intern = await Interns.createIntern(req.body);
    // const intern = {
    //   id: Math.floor(Math.random() * 10 + 5),
    //   name: "Test Name",
    //   location: "Test Location",
    // };

    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", async () => {
      const { name, location } = JSON.parse(body);
      const intern = {
        name,
        location,
      };
      const newIntern = await Interns.createIntern(intern);
      res.statusCode = 201;
      res.setHeader("Content-Type", "text/html");
      return res.end(JSON.stringify(newIntern));
    });
  } catch (error) {
    console.log(error);
  }
}
//@desc Update intern
//@route PUT /api/interns/:id
async function updateIntern(req, res, id) {
  try {
    const intern = await Interns.updateIntern(id, req.body);
    if (!intern) {
      //if no intern found
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end(JSON.stringify({ message: "Intern not found" }));
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(JSON.stringify(intern));
    }
  } catch (error) {
    console.log(error);
  }
}
//@desc Delete intern
//@route DELETE /api/interns/:id
// async function deleteIntern(req, res, id) {
//     try {
//         const intern = await Interns.deleteIntern(id);
//         if (!intern) {
//             //if no intern found
//             res.statusCode = 404;
//             res.setHeader("Content-Type", "text/html");
//             res.end(JSON.stringify({ message: "Intern not found" }));
//         } else {
//             res.statusCode = 200;
//             res.setHeader("Content-Type", "text/html");
//             res.end(JSON.stringify(intern));
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

module.exports = {
  getInterns,
  getIntern,
  createIntern,
};
