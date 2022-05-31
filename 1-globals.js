// __dirname = returns the path to currrent directory
//__filename  - file name
//require - function to use modules
//module -info about the module
// process - info about the envioronment where the process is being executed 
// ex : digitlocean or something else can be the env for node that the process is being executed

console.log(__dirname);
console.log(__filename);
// console.log(process);
var name = "balwani";
const sayHi = (name)=>{
    // console.log(`hie ${name} `+name);
    console.log(`hie ${name}`);
}
// function sayHi(name){
//     console.log(`hie ${name}`);
// }
sayHi('kareenaaaaaaaaaaaaaaaaaaaaaaaa');
// sayHi(name);
// if i keep above two lines here then the file where i have imported this sayHi function in that fiel it will run the function that i have called in original file 



             
module.exports = sayHi;
