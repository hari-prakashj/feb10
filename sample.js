let http= require("http");

let port=5000;

var server= http.createServer((req,res)=>{
    res.end("server created")
});
server.listen(port);