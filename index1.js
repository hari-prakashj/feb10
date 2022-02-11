let http=require("http")

let port=2000

// http.createServer((req,res)=>{
//     res.end("sucess")
// }).listen(port);

var servere = http.createServer(function(req,res){
    res.end("connection success");
});

servere.listen(port);