const fs = require('fs');
const data = "I am Appended to Last";
fs.appendFile("./data.txt",data,(err)=>{
    if(err) throw err;
    console.log("Data Appended to final! ");
    
});