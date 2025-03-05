const http = require('http');
const fs = require('fs/promises');

const server = http.createServer(async (req,res) => {
    const data = await fs.readFile('./data.json');
    const myData = JSON.parse(data);
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');  
    const names = myData.map((item) => {
        return item.name;
    })
    console.log(JSON.stringify(names));
    res.end(JSON.stringify(names));
})

server.listen(9000,(err) =>{
    if(err)
        console.log("Error : "+err);
    console.log("Server is running at https://localhost:9000");
});