//
// Ejercicio 4
//

let texto = prompt('Digite un texto: ');
let caracter = prompt("Digite un caracter: ");
let resultado = [];

for (let i = 0; i < texto.length; i++){
    if( texto[i].toLowerCase() === character){
		resultado.push(i);
		}
}

//.toLowercase: Devuelve el valor en minúsculas de la cadena que realiza la llamada.

console.log(`El caracter ${caracter}, se repite en el texto en :  ${resultado.length}`);
