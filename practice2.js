const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;

  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>This is my server </title></head>");
    res.write(
      '<body><form action="/file" method="POST" name= "msg"><input type="text" name="msg"><button type="submit">Submit</button></from></body>'
    );
    res.write("</html>");
  } else if (url === "/file" && method === "POST") {
    const information = [];

    req.on("data", (chunks) => {
      information.push(chunks);
    });

    req.on("end", () => {
      const parseInformation = Buffer.concat(information).toString();
      const message = parseInformation.split("=")[1];
      fs.writeFileSync("Message.js", `console.log("${message}")`);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});

server.listen(3000);
