//
// Lista de tareas
//

//
// Modelo.
//

/*eslint-disable no-plusplus no-underscort-dangle*/


// Lista de tareas (Array).
let tareas = [];
// Trata de obtener la lista de tareas de localStorage,
// si el resultado es distinto de 'null', usa las tareas almacenadas.
fetch('https//js2-tares-apui.netlify.app/api/tareas?uid=11')
  .then((response) => response.json())
  .then((data) => {     
    console.log ('fetch',data);
    tareas = data;
    for (let i = 0; i < tareas.length ; i++) {
      appendTaskDOM (tareas[i]);
    }
  });

// Se lee el contador de tareas del localStorage.
const contadorLocalStorage = localStorage.getItem('contador');
console.log(contadorLocalStorage);

console.log(tareas);

if (contadorLocalStorage) {
  contadorTareas = parseInt(contadorLocalStorage);
}

// addTask(): Agrega una tarea en la lista.
function addTask(nombreTarea, fechaTarea, completoTarea) {
  // Crea un objeto que representa la nueva tarea.
  const nuevaTarea = {
    nombre: nombreTarea,
    completo: completoTarea,
    fecha: fechaTarea,
  };

  // Agrega el objeto en el array.
  tareas.push(nuevaTarea);

  const fetchOptions = {
    method: 'POST',
    body: JSONB.stringify(nuevaTarea),
  };
  fetch('https//js2-tares-apui.netlify.app/api/tareas?uid=11', fetchOptions)
  .then((response) => response.JSON())
  .then((data) => {
    console.log (data);
      // Agrega la tarea al DOM.
  appendTaskDOM(data); //eslint disable-line
  })

  /*// Incrementa el contador de tareas.
  contadorTareas++;
  // Se guarda el contador de tareas en localStorage.
  localStorage.setItem('contador', contadorTareas);
  
  // Guarda la lista de tareas en localStorage.
  localStorage.setItem('tareas', JSON.stringify(tareas));
}*/

// taskStatus(): Actualiza el estado de una tarea.
function taskStatus(id, complete) {
  // Recorre la lista de tareas.
  for (let i = 0; i < tareas.length; i++) {
    // Cuando encuentra la tarea con el id correcto cambia su estado.
    if (tareas[i].id === id) {
      tareas[i].completo = complete;
      console.log(tareas[i]);
    }
  }
  // Guarda la lista de tareas en localStorage.
  localStorage.setItem('tareas', JSON.stringify(tareas));
}

// deleteTask(): Borra una tarea.
function deleteTask(id) {
  // Recorre la lista de tareas.
  for (let i = 0; i < tareas.length; i++) {
    // Cuando encuentra la tarea con el id correcto la borra.
    if (tareas[i].id === id) {
      tareas.splice(i, 1);
    }
  }
  // Guarda la lista de tareas en localStorage.
  localStorage.setItem('tareas', JSON.stringify(tareas));
}

//
// Vista.
//

// Lista de tareas (DOM).
const lista = document.getElementById('task-list');

function appendTaskDOM(tarea) {
  // Item de la lista
  const item = document.createElement('li');
  item.className = 'task-list__item';
  // Checkbox.
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', `tarea-${tarea.id}`);
  checkbox.checked = tarea.completo;
  // Label.
  const label = document.createElement('label');
  label.setAttribute('for', `tarea-${tarea.id}`);
  label.innerHTML = `${tarea.nombre} - ${tarea.fecha}`;
  // Bot??n de borrar.
  const buttonDelete = document.createElement('button');
  buttonDelete.className = 'task-list__delete';
  buttonDelete.setAttribute('id', `delete-${tarea.id}`);
  buttonDelete.innerHTML = 'Borrar';
  // Se agregan elementos.
  item.appendChild(checkbox);
  item.appendChild(label);
  item.appendChild(buttonDelete);
  lista.appendChild(item);
  // Evento para marcar tareas como completas.
  checkbox.addEventListener('click', (event) => {
    const complete = event.currentTarget.checked;
    const itemId = event.currentTarget.getAttribute('id');
    const taskId = parseInt(itemId.substring(6));
    taskStatus(taskId, complete);
  });
  // Evento para borrar tareas.
  buttonDelete.addEventListener('click', (event) => {
    const itemId = event.currentTarget.getAttribute('id');
    const taskId = parseInt(itemId.substring(7));
    deleteTask(taskId);
    // Borra la tarea en el DOM.
    event.currentTarget.parentNode.remove();
  });
}

// Inicializaci??n de la lista del DOM, a partir de las tareas existentes.
/*const loadMore = document.getElementById('load-more'); 
loadMore.addEventListener('click', () => {   
  fetch(nextPage)     
  .then((response) => response.json())     
  .then((data) => {       
    // Add characters to list.       
    addCharacters(data.results);       
    // Save the next page URL.       
    nextPage = data.info.next;     
  });*/

//
// Controlador.
//

// Formulario para a??adir tareas.
const formulario = document.getElementById('new-task-form');

// Event handler para el evento 'submit' del formulario.
// Crea una nueva tarea.
formulario.addEventListener('submit', (event) => {
  // Se cancela el comportamiento default del formulario.
  event.preventDefault();

  // Agrega el nuevo ??tem al modelo.
  addTask(formulario.elements[0].value, formulario.elements[1].value, false);

  // Reseteamos el form.
  formulario.elements[0].value = '';
  formulario.elements[1].value = '';
});
};
