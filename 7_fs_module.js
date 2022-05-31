const fs  = require("fs");
console.log("start !");
const first = fs.readFileSync("./content/first.txt","utf-8");
console.log("middle !");
const second = fs.readFileSync("./content/subfolder/second.txt","utf-8");
console.log(first +" "+ second);

fs,fs.writeFileSync("result_sync.txt",` Heya all !this is a new file with ${first}, ${second}`,{flag:'a'});
console.log("end !");



//if we change the content of result_sync.txt file and thn save it and then run the file fs_module.js then the result file will be overwritten by node it will again print the first file and this is second file

//if we keep executing the file again and again it will append the conetent at the end of the file when the flag attribute is set to 'a'