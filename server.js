const http = require("http"); // importing core http modeule
//hosting locally
const hostname = "127.0.0.1";
// port number to access the server
const port = 3000;
//server creation  and handling incomming request here
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello Sonwar, the server is up");
});
//listening for incoming request
server.listen(port, hostname, () => {
  console.log(`Your Server is running at http://${hostname}:${port}/`);
});
