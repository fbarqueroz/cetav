const argumento = process.argv.slice(2);

const num = Number(argumento[0]);

function operacionSuma(num){
    const suma = num * (num + 1) / 2;
    return suma;
}
console.log(operacionSuma(num));