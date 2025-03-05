const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    // res.end('Hello World');
    if (req.url==='/getdata' && req.method==='GET'){
        const data= {name:'John Doe',age:30};
        res.end(JSON.stringify(data));
        return ;   
    }
});

server.listen(9000,()=>{
    console.log('Server is running on port 9000');
});