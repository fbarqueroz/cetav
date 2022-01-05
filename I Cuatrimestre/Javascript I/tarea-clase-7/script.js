//
// Tarea Clase 7
//

let salir = false;
let arreglo = [];

while (!salir) {
    let numero = prompt('Ingrese un número');

    if (!isNaN(parseInt(numero))) {
        arreglo.push(parseInt(numero));
    } else {
        if (numero == "") {
            salir = true;

            console.log ('Arreglo:', arreglo);

            // Orden
            arreglo.sort ((a, b) => a - b);

            // Minimo
            let minimo = Math.min.apply (null, arreglo);
            console.log('Minimo: ', minimo);

            //Maximo
            let maximo = Math.max.apply (null, arreglo);
            console.log('Maximo: ', maximo);

            // Promedio
            let suma = arreglo.reduce ((previous, current) => current += previous);
            let prom = suma / arreglo.length;
            console.log ('Promedio: ', prom);

            //Mediana
            let mediana_1 = Math.floor ((arreglo.length - 1) / 2);
            let mediana_2 = Math.ceil ((arreglo.length - 1) / 2);
            let mediana = (arreglo [mediana_1]) + (arreglo [mediana_2] / 2);
            console.log('Mediana: ', mediana);
        }
    }
}
