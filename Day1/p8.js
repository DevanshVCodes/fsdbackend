const fs = require('fs');
// console.log("Create a New Directory");
fs.mkdir('MyFolder',{recursive: true}.recursive,(err)=>{
    if(err){
        console.error("An Error Occured: ",err);
        return;
    }
    console.log("Directory Created Successfully");

});
