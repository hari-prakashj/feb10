let http=require("http")

let port=3000

http.createServer((req,res)=>{
    res.end("completed")
}).listen(port);