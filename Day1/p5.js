const fs = require('fs');
const data = "I am in async write";
fs.writeFile("./data.txt",data,(err)=>{
    if(err)
        console.erroe("Erroe Writing File",err);
    else
        console.log("File Written Successfully");

})