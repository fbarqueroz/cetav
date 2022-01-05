/*Ejercicio 1:
Escriba una función llamada max que tome como argumento dos números y retorne el mayor
de ellos. Escriba un pequeño programa interactivo que permita evaluar el funcionamiento de
la función.*/

let num1 = parseInt (prompt('Digite en primer numero: '));
let num2 = parseInt (prompt('Digite el segundo numero: '));
let funcion = max (num1, num2);

function max (num1, num2) {
    if (num1 > num2) {
        return num1;
    }else {
        return num2;
    }
}
console.log(funcion);