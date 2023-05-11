const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res)=>{
    res.setHeader("Content-Tyle", "text/html");

    let path = "./views/"

    switch(req.url){
        case "/home":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/":
            res.statusCode = 301;
            res.setHeader("Location", "/home");
            res.end();
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        default:
            path += "404.html";
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data)=>{
        if (err){
            res.statusCode = 500;
            res.end();
        }else{
            res.end(data);
        }
    })

})

server.listen(3000, "localhost", () => {
    console.log("listening for requests on port 3000")
})