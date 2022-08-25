const http = require("http"); // importing core http modeule
//hosting locally
const fs = require("fs");
const hostname = "127.0.0.1";
// port number to access the server
const port = 3000;
//server creation  and handling incomming request here
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/plain");
  //   res.end("Hello Sonwar, the server is up");
  // http header
  res.writeHead(200, { "Content-Type": "text/html" });

  const url = req.url;
  const method = req.method;

  if (url === "/about") {
    res.write(" Welcome to about us page");
    res.end();
  } else if (url === "/contact" || method === "POST") {
    res.write("<html><body><h1>Welcome to cintact us page</h1></body></html>");
    res.end();
  } else if (req.url == "/admin") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><h1>This is admin Page.</h1></body></html>");
    res.end();
  } else if (req.url == "/render") {
    const readStream = fs.createReadStream("./static/index.html");
    res.writeHead(200, { "Content-type": "text/html" });
    readStream.pipe(res);
  } else {
    res.write("Hello Sonwar, the server is up");
    res.end();
  }
});
//listening for incoming request
server.listen(port, hostname, () => {
  console.log(`Your Server is running at http://${hostname}:${port}/`);
});
