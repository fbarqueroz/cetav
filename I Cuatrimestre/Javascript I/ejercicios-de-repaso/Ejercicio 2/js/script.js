//
// Ejercicio 2
//

const numero = parseInt(prompt('Digite un número entero: '));
let suma = 0;
let contador = 1;

while(contador <= numero){
    suma = suma + contador;
    console.log(contador);
    contador++;
}

console.log(`Resultado de la suma es: ${suma}`);