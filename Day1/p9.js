const fs=require('fs');
fs.rmdir('./MyFolder',(err)=>{
    if(err) throw err;
    console.log('Folder Deleted Successfully');
})