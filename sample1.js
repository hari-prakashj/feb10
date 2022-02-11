let http = require("http");
let port = 3000;
var server = http.createServer((req, res) => {
 res.setHeader("Content-Type", "application/json");
 res.end('{ "message" : "Hello World " }');
});

server.listen(port); 