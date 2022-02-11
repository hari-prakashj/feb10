var http = require("http");

var port = 3500;

var server = http.createServer((req,res)=>{
    res.end("server connection success!")
});
server.listen(port);