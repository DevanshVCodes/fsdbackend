const http=require('http');
const Users=[
    {id:1,name:"john",age:25},
    {id:2,name:"dfewdf",age:34},
    {id:3,name:"fwef",age:87}
];
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    const names = Users.map((user)=>{
        return user.name;
    })
    res.end(JSON.stringify(names));
})

server.listen(9001,()=>{
    console.log('Server is running at 9001');
})