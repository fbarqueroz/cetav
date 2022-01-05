/*Modifique el ejercicio 2 de la Práctica 2 para que utilice una función que reciba como
argumento dos números enteros y retorne verdadero en caso de que el primer número sea
divisible entre el segundo y falso en caso contrario. */

/*const numero = parseInt(prompt ("Digite un número:"));
let funcion = (numero);

function rocket (numero) {
    if (isNaN(numero) || (numero < 0)) {
    console.log ("El valor ingresado no es válido");
    } else{
        if  (numero % 3 == 0 && numero % 5 != 0) {
            console.log ("🚀");
        }
    }
    return rocket;
}
function hamburger (numero) {
    if (isNaN(numero) || (numero < 0)) {
        console.log ("El valor ingresado no es válido");
    } else (numero % 5 == 0 && numero % 3 != 0); {
        console.log ("🍔")
    }
    return hamburger;
}
function beer (numero) {
    if (isNaN(numero) || (numero < 0)) {
        console.log ("El valor ingresado no es válido");
    }else (numero % 3 % 5 == 0); {
        console.log ("🍺");
    }
    return beer;
}

//console.log (funcion);*/

const num1 = parseInt(prompt('Ingrese el primer numero: '));
const num2 = parseInt(prompt('Ingrese el segundo numero: '));

let funcion = div (num1, num2);

function div (num1, num2) {
    
    if (isNaN(num1, num2) || (num1 < 0) && (num2 < 0)) {
        console.log ("El valor ingresado no es válido");   
    } else if (num1 % num2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log (funcion);