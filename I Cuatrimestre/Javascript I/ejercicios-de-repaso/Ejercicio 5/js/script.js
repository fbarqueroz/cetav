//
// Ejercicio 5
//

let numero = parseInt(prompt('Digite un numero: '));
const secreto = 23;
const exit = 0;

if(numero == secreto){
    console.log(`${numero}, es el numero secreto`);
}else{
    while( numero != exit && numero != secreto ){
    numero = parseInt(prompt('Digite otro numero: '));
        if(numero <= 100 && numero >= 1){
            if(numero < secreto){
                console.log( `${numero}, El valor digitado es menor al numero secreto`);
            }else if(numero > secreto){
                console.log(`${number}, El valor digitado es mayor al numero secreto`);
            }else if( numero == secreto){
                console.log(`${number}, Has encontrado el numero secreto`); 
            }
        }else{
            console.log(`El numero ${numero} esta fuero del rango`);
                
        }
            
    }
}