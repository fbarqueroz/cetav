const addition = require('./addition');

const argumento = process.argv.slice(2);

const num1 = Number(argumento[0]);
const num2 = Number(argumento[1]);
const operacion = Number(argumento[2]);

console.log(addition.operacion(num1,num2,operacion));