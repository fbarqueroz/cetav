/*Ejercio 3:
Modifique el ejercicio 6 de la práctica de repaso para que utilice una función llamada esPrimo
que tome como argumento un número entero y retorne true si el número es primo y falso en
caso contrario. */

let numero = parseInt(prompt('Ingrese un número para averiguar si es primo'));
let funcion = esPrimo(numero);

function esPrimo(num){
    let i = 2;
    let primo = true;
    
    while (i < num) {
        if(num % i == 0){
            primo = false;
        }
        i++;
    }
    
    if(primo == true){
        return true;
    }else{
        return false;
    }
}

console.log(funcion);