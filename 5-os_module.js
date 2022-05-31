    // for buit in modules there is no need to use ./
    // just type the name of module
    // ./ is only used for user-defined modules
const os = require("os");

//info of user

const user = os.userInfo();
console.log(user);


//You need not to assign a module to variable , you can directly use  or console them

console.log(`The system uptime is ${os.uptime()}`);

const currentOS = {
    type:os.type(),
    release : os.release(),
    TotalMem : os.totalmem(),
    freeMem: os.freemem()
}
;
console.log(currentOS);