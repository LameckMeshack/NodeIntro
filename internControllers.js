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
module.exports = {
  getInterns,
  getIntern,
};
