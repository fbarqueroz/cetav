//
// Práctica 10 - Cronómetro
//

console.log('Esto es un cronómetro!');


let timer;
let count= 0;
const inicio = document.getElementById('start');
const detener = document.getElementById('stop');
const limpiar = document.getElementById('reset');
const crono = document.getElementById('cronometro');

/*Funcion central del Stoptimer*/
function stopTimer() {
    crono.innerHTML = count++; 
}

/*Inicio del conteo del cronometro*/
function start() {
    timer = window.setInterval(stopTimer,1000);
}

/*Indica cuando se detiene el contador*/
function stop() {
    window.clearInterval(timer);
}

/*Reestablece los valores en "0"*/
function reset() {
    window.clearInterval(timer)
    count = 0;
    crono.innerHTML = count; 
}

inicio.addEventListener('click', start); //Start Button
detener.addEventListener('click', stop); //Stop Button
limpiar.addEventListener('click', reset); //Reset Button