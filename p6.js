const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async (req,res) =>{
    const data = await fetch('https://dummyjson.com/products');
    const myData = await data.json();
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    const names = myData.products.map((item) => {
        return item.title;
    })
    console.log(JSON.stringify(names));
    res.end(JSON.stringify(names));
})

server.listen(9000,(err) =>{
    if(err)
        console.log("Error : "+err);
    console.log("Server is running at https://localhost:9000");
});