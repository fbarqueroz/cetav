/**
 * Ejercicio #4:
 *
 * Validar el formulario
 *
 * ¿Como funciona?:
 * 1. La validacion se hace cuando el usuario presiona el boton "Enviar" para enviar el form
 * 2. Solo se validan los campos con el * (tienen la clase requerido)
 * 3. Al hacer click en "enviar"
 *     3.1. Los campos invalidos deben ponerse con un borde rojo
 *     3.2. Se debe mostrar un aviso arriba de los campos con un titulo de: "Ocurrio un error, verifica
 *     los siguientes campos" y seguido un listado con los campos invalidos. El aviso
 *     debe tener border rojo y fondo rojo claro
 *     3.3. Si todos los camppos son validos, debe mostrar un mensaje abajo del boton enviar
 *     que dice: "Su formulario fue enviado". El aviso debe tener borde verde con fondo verde claro
 *
 * ¿Donde empiezo?:
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas (incluyendo buenas practicas pasadas)
 *
 */

// BOILERPLATE
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  
  event.preventDefault();

  let name = document.querySelectorAll('.requerido')[0].value;
  let lastName = document.querySelectorAll('.requerido')[1].value;
  let mail = document.querySelectorAll('.requerido')[2].value;

  if (name == 0) {
    alert("Ocurrio un error, verifica la casilla de nombre");
  }

  else if (lastName == 0) {
    alert("Ocurrio un error, verifica la casilla de apellido");
  }

  else if (mail == 0) {
    alert("Ocurrio un error, verifica la casilla de mail");
  }

  else {
    alert("El formulario fue enviado con exito");
  }

  console.log("FORMULARIO ENVIADO");

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
});
