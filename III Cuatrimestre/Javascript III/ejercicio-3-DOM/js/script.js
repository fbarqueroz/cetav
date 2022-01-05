/**
 * Ejercicio #3:
 * Usando querySelector y querySelectorAll
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas
 *
 * NOTA: no se puede modificar el codigo HTML de la pagina
 */

/*
  EJERCICIO A: --------------------------------------------
  
  Selecciona y console.log el <h3> que dice "Esto
  es una lista"
*/

// excercise A

const excerciseOne = document.querySelector('h3');
console.log(excerciseOne.innerText);

/*
  EJERCICIO B: --------------------------------------------
  
  Selecciona y loguea el primer y el ultimo elemento
  de la lista
*/

// excercise B

const firstElement = document.querySelectorAll('li')[0];
console.log(firstElement);

const lastElement = document.querySelectorAll('li')[3];
console.log(lastElement);

/*
  EJERCICIO C: --------------------------------------------
  
  Selecciona y loguea el input de tipo "email" del
  formulario
*/

//Excercise C

const InputMail = document.querySelector("input[type='email']");
console.log(InputMail);

/*
  EJERCICIO D: --------------------------------------------
  
  Selecciona y loguea la fila de la tabla que tiene "JavaScript"
*/

// Execise D

const filaJs = document.querySelectorAll('td')[2];
console.log(filaJs.innerText);


/*
  EJERCICIO E: --------------------------------------------
  
  Selecciona y loguea la celda que dice CSS
*/

// Excercise E

const celdaCSS = document.querySelectorAll('tr')[3];
console.log(celdaCSS.innerText);


/*
  EJERCICIO F: --------------------------------------------
  
  Investiga un metodo de algun elemento y trae un ejemplo de
  para que lo usarias
*/
