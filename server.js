const http = require("http"); // importing core http modeule
const { getInterns, getIntern } = require("./internControllers"); // importing getAllInterns function from internRoutes.js

//hosting locally
const fs = require("fs");
const hostname = "127.0.0.1";

// port number to access the server
const port = process.env.PORT || 3000;
//server creation  and handling incomming request here
const server = http.createServer(async (req, res) => {
  const method = req.method;
  const url = req.url;
  //all interns
  if (url === "/api/interns" && method === "GET") {
    getInterns(req, res);
  } else if (url.match(/\/api\/interns\/([0-9]+)/) && method === "GET") {
    const id = +url.split("/")[3];
    getIntern(req, res, id);
    // getIntern(req, res, url.split("/")[3]);
    console.log(typeof id);
    console.log(typeof 3);
    console.log(url);
    // getIntern(req, res, id);
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end("Page not found");
  }
});
server.listen(port, hostname, () => {
  console.log(`Your Server is running at http://${hostname}:${port}/`);
});
