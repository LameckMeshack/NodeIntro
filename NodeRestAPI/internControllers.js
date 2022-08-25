const Interns = require("./internRoutes");
const { getPostData } = require("./utils");

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
// @desc    Update a Intern
// @route   PUT /api/intern/:id
async function updateIntern(req, res, id) {
  try {
    const intern = await Interns.getIntern(id);

    if (!intern) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Intern Not Found" }));
    } else {
      const body = await getPostData(req);

      const { name, location } = JSON.parse(body);

      const internData = {
        name: name || intern.name,
        location: location || intern.location,
      };

      const updateIntern = await Interns.updateIntern(id, internData);

      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(updateIntern));
    }
  } catch (error) {
    console.log(error);
  }
}

// @desc    Delete Intern
// @route   DELETE /api/intern/:id
async function deleteIntern(req, res, id) {
  try {
    const intern = await Interns.getIntern(id);

    if (!intern) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "intern Not Found" }));
    } else {
      await Interns.deleteIntern(id);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: `Intern ${id} removed` }));
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getInterns,
  getIntern,
  createIntern,
  updateIntern,
  deleteIntern,
};
