// import the http module

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Hello world");
});

server.listen(3000)

