/**
 * Ejercicio #2: 

 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas
 *
 */

/*
  EJERCICIO A: --------------------------------------------
  Los botones del 0 al 9 ya tienen el evento 'click'
  vinculado y que llama a la función botonClickeado
  con el numero index del recorrido que se está haciendo.

  Tu trabajo, es hacer que cuando se llame a la función
  se loguee el mensaje a la consola:

  "Hiciste click en el botón N"
  
  Tarea: Escribe el cuerpo de la función botonClickeado
*/

// Tu código aquí
function botonClickeado() {
  console.log('Hiciste click en el botón' + ' ' + botones.num);
  
}
  // BOILERPLATE
  var botones = document.querySelectorAll(".one button");
  for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", botonClickeado(i));
  }
  /*
    EJERCICIO B: --------------------------------------------
    Al hacer click en el botón "Incrementar"
  
    Tu trabajo, hacer que la función "incrementarFunc"
    permita incrementar el conteo comenzando desde 0.
  
    NO USAR VARIABLES GLOBALES, tienes que usar closure.
  
    "Hiciste click en el botón N"
    
    Tarea: Escribe el cuerpo de la función incrementarFunc
  */
  
  // Tu código aquí
  function incrementarFunc () {
    num = 0;
    count = 1;
    console.log (num);
  }
  
  // BOILERPLATE
  const actualizar = incrementarFunc();
  const incrementar = document.querySelector("#incementar");
  incrementar.addEventListener("click", function() {
    this.innerText = "incrementar" + actualizar();
  });
  
  /*
    EJERCICIO C: --------------------------------------------
    El usuario ingresa el nombre y al hacer click debe inprimirlo en el DOM.
    
    Tarea: Arreglar el codigó que no funciona. No se esta imprimiento el valor del input
    Condicions: NO puedes usar "var".
  */
  
  const button = document.querySelector("#mostrar");
  const input = document.querySelector("#nombre");
  const resultado = document.querySelector("#resultado");
  const texto = "Aqui sale el resultado";
  resultado.innerText = texto;
  
  button.addEventListener("click", function() {
    if (input.value !== "") {
      const texto = input.value;
      resultado.innerText = texto;
    }
  });