const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.setHeader("Context-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>This is my Server </title></head>");
    res.write("<body>This is my Server </body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/file") {
    fs.writeFileSync(
      "Data.txt",
      "This is the server response on creation of the file "
    );
    // this will redirect the page to the localhost:3000 or the location of the web
    res.statusCode = 302;

    res.setHeader("Location", "/");
    return res.end();
  } else {
    res.setHeader("Context-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>This is my Server </title></head>");
    res.write("<body>This is not the server you want to be at go to /</body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(3000);
