const http = require("http");

const fs = require("fs");

const { parse } = require("path");

const server = http.createServer((req, res) => {

  const url = req.url;

  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first Page</title></head?");
    res.write(
      '<body><form  action ="/file" method= "POST" name = "msg"><input type="text" name="msg"><button type="submit">Submit</button></form></body>'
    );
    res.write("</html");
    return res.end();
  } else if (url === "/file" && method === "POST") {
    const body = [];
    req.on("data", (chunks) => {
      body.push(chunks);
    });

    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];
      fs.writeFileSync("Form.txt", message); // blocking code syncronus code 
    });
    res.statusCode = 302; //redirect the page to the root page as per the location
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Second Page</title></head?");
  res.write("<body><h1>My Second Page </h1></body>");
  res.write("</html");
  res.end();

});

server.listen(3000);
