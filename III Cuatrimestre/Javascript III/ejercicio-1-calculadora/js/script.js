/**
 * Ejercicio #1: La Calculadora
 *
 * ¿Como funciona?:
 * El usuario ingresa los números en los campos, selecciona la operación
 * y hace click en el botón "Calcular" para obtener el resultado.
 *
 * ¿Que tengo que hacer?
 * Tienes que escribir todas las funciones que consideres necesarias para
 * calcular el total de la operación.
 *
 * Considera:
 * 1. Si el usuario no completa todos los campos tienes que imprimir un
 *    mesaje de error. Ya existe la funcion que lo hace "imprimirError"
 * 2. Ya tienes variables para obtener los valores de los campos: input1,
 *    input2 y operacion. Para obtener el valor usas la propiedad "value".
 *    Por ejemplo: input1.value
 * 3. El valor de los campos de texto va a venir como un string, debes
 *    usar parseInt() para convertirlos a numeros y poder hacer operaciones
 *    matematicas. Por ejemplo parseInt(input1.value, 10)
 *
 * ¿Donde empiezo?:
 * Comiezas en la funcion "hacerOperacion". Ya está escrito el código para
 * que cuando el usuario haga click en el boton "Calcular" se llame a la
 * funcion "hacerOperacion".
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas
 *
 */

// BOILERPLATE: NO TOCAR ESTE CODIGO
document.querySelector("button").addEventListener("click", hacerOperacion);

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const operacion = document.querySelector("#operacion");

function imprimirResultado(total) {
  const resultado = document.querySelector("#resultado");
  resultado.innerText = `El resultado de tu operación es ${total}`;
}

function imprimirError(mensaje) {
  const error = document.querySelector("#error");
  error.innerText = mensaje;
}

// TERMINA EL BOILERPLATE

// COMIENZA ACA

//
// Ejercicio 1 -- 🍕 Fabián Barquero Zúñiga 🍕
//

function hacerOperacion() {

  // Se realiza condicionales para identificar espacios vacios

  // Espacio vacio input 1
  if (isNaN(parseInt(input1.value))) {
    imprimirError('El campo 1 esta vacio. Por favor ingrese un valor e intentelo de nuevo.');
  }

  // Espacio vacio en input 2
  if (isNaN(parseInt(input2.value))) {
    imprimirError('El campo 2 esta vacio. Por favor ingrese un valor e intentelo de nuevo.');
  }

  else {

    let select = document.querySelector('select');

    // Evento del select
    select.addEventListener('click', mathOperations);

    let selectOperation = select.value;

    // Se realiza funcion de operaciones matematicas
    function mathOperations () {

      // Condicional para la opcion de suma
      if (selectOperation === 'sumar') {

        // Se llama a los input (valores) y la variable resultado
        let sumaTotal;
        let input_1 = parseInt(input1.value);
        let input_2 = parseInt(input2.value);
        sumaTotal = input_1 + input_2;
        imprimirResultado(sumaTotal);
      }

      // Condicional para la opcion de resta
      else if (selectOperation === 'restar') {
        let restaTotal;
        let input_1 = parseInt(input1.value);
        let input_2 = parseInt(input2.value);
        restaTotal = input_1 - input_2;
        imprimirResultado(restaTotal);
      }

      //Condicional para la opcion de multiplicar
      else if (selectOperation === 'multiplicar') {
        let multiplicacionTotal;
        let input_1 = parseInt(input1.value);
        let input_2 = parseInt(input2.value);
        multiplicacionTotal = input_1 * input_2;
        imprimirResultado(multiplicacionTotal);
      }

      //Condicional para la opcion de multiplicar
      else if (selectOperation === 'dividir') {
        let divisionTotal;
        let input_1 = parseInt(input1.value);
        let input_2 = parseInt(input2.value);
        divisionTotal = input_1 / input_2;
        imprimirResultado(divisionTotal);
      }
    }
  }
}
