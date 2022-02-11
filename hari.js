let http=require("http")

let port=2500

http.createServer((req,res)=>{
    res.end("hariprakash")
}).listen(port);