// every file is module in node
 const names = require("./names");
 const sayHi = require("./1-globals");
 const alternatives=require("./3-alternative_names");
// const add = require("./4-add_function");
  require("./4-add_function")

  //although we haven't exported the add_function file we have just imported that file and we are not assigning it to a variables still it calls that fucntion bcoz wwe have calledn that funtion in the file 4-add-function.js


console.log(names);
console.log(names.name1+ " is a coder");
sayHi("sahil");
sayHi(names.name1);
console.log(alternatives.person['course name']+ " that i am studying");
console.log("My roll Num is :"+ alternatives.person.roll);
console.log("my greeting word is => "+alternatives.items[1]);
