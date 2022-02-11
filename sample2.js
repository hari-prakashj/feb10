let http= require("http");

let port= 6000;

var server= http.createServer((req,res)=>{
    res.setHeader("content-type","application/json");
    res.statuscode=200;
    res.write('{"name":"prakash"}');
    res.end("final product");

})
server.listen(port);