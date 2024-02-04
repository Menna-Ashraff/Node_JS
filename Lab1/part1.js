const http = require("http");
const fs = require("fs");
const fun = function (req, res) 
{
    function search(pathfile, status, hname, hvalue) 
    {
      fs.readFile(pathfile, function (err, data) 
      {
        res.writeHead(status, hname, hvalue);
        res.write(data);
        res.end("");
      });
    }
    if (req.url == "index.html") 
    {
      search("index.html", 200, "attempt", "success");
    } else if (req.url == "about.html") {
      search("about.html", 200, "attempt", "success");
    } else if (req.url == "contact.html") {
      search("contact.html", 200, "attempt", "success");
    } else {
      search("404.html", 404, "attempt", "failed");
      res.end("error");
    }
};
  
  const objBack = http.createServer(fun);
  objBack.listen(8080);