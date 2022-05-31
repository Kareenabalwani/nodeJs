const path =require("path");

console.log(path.sep);
//returns the separator

const filepath = path.join('./content','subfolder','test.txt');
console.log(filepath);

//basename returns the file name
console.log(path.basename(filepath));

//resolve() returns the absolute path as our code will run in different environment

const absolute = path.resolve(__dirname,'/content','subfolder','test.txt');
console.log(absolute);