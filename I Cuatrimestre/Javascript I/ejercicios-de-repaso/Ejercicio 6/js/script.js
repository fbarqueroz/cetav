//
// Ejercicio 6
//

let num = parseInt(prompt("digite un numero: "));
let i = 0;
let primo = true;

for(i = 2; i < num; i++){
    if(num % i == 0){
        primo = false;
    }
}

if( primo == true){
    console.log("El numero que ingreso es primo");
}else{
    console.log("El numero ingreso es compuesto");
}
