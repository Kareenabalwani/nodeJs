 const fs = require("fs")

var first; 
 fs.readFile("./content/first.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(data);

     
    
 }); 
 var second;
 fs.readFile("./content/subfolder/second.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
        return;
    }
   const  second =data
   console.log(data);
 });


 fs.writeFile("result_async.txt",`Hello Result async ${first}, ${second}`,(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log("write operation successfull");
 })
console.log(first);
console.log(second);