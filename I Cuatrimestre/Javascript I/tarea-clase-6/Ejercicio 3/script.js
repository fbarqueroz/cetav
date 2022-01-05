//
// Ejercicio 3
//
let numero = parseInt (prompt("Digite un numero:"));
let asterisco = " ";
let count = 0;

while (count < numero) {
    asterisco = asterisco + "*";
    while (asterisco < numero) {
        asterisco = asterisco + "*";
    
    }
    console.log (asterisco);
    count ++;
}