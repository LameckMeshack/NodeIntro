const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const hostname = "127.0.0.1";
//localhost:3000/

app.get("/", (req, res) => {
  res.send("Hello Sonwar the express server is up and running");
});

app.listen(port, hostname, () => {
  console.log(`Your Server is running at http://${hostname}:${port}/`);
});
