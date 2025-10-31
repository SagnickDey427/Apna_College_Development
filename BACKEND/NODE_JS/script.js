

//**********************************Example of Process object in Node JS******************************

// let args = process.argv;

// for(let i=0;i<args.length;i++){
//     console.log(args[i]); //C:\nvm4w\nodejs\node.exe (Executable node path)
//                           //C:\Users\SAGNICK\Coding_Doc\Apna_College_Development\BACKEND\NODE_JS\script.js (Current file/script path)
//                           //Other arguments if passed
// }

//For e.x. )--> Try calling 'node script.js Sagnick Sahil Himanshu' from terminal , last 3 are arguments passed


//***********************************Example of module.exports**************
//From file : math.js to file : script.js
// const math = require("./math.js");
// console.log("The sum is "+math.sum(5,10));
// console.log("Pi is "+math.PI);

//From Directory : Fruits to file : script.js
// const info = require("./Fruits");
// console.log(info); // [ { name: 'apple', color: 'red' }, { name: 'banana', color: 'yellow' } ]

//*********************** Example of import**************************

import {sum,mul,PI} from "./math.js";
import randomWord from 'random-word';
console.log(sum(9,10));
console.log(randomWord());