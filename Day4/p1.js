const fs = require('fs/promises');
const http=require('http');
const server = http.createServer(async(req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    const data = await fs.readFile("./data.json");
    res.end(data);

});

server.listen(3000,()=>{
    console.log('Server is Running at http://localhost:3000/')
});