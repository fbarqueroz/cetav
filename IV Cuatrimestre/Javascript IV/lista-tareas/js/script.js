//
// Task list - Fabian Barquero & James Solís ✌
//

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */

// Var
const uid = 1;
let tareas = [];
const formulario = document.getElementById('new-task-form');

// Se obtiene el listado inicial de tareas a partir del API.
fetch(`https://js2-tareas-api.netlify.app/api/tareas?uid=${uid}`)
  .then((response) => response.json())
  .then((data) => {
    tareas = data;
    // DOM started.
    for (let i = 0; i < tareas.length; i++) {
      appendTaskDOM(tareas[i]);
    }
  });

// addTask() --> Add new task on the list.
function addTask(nombreTarea, fechaTarea, completoTarea) {
  // Create an object
  const nuevaTarea = {
    name: nombreTarea,
    complete: completoTarea,
    date: fechaTarea,
  };

  // Create an object on the array.
  tareas.push(nuevaTarea);

  // Send a new task API.

  // Fetch options.
  const fetchOptions = {
    method: 'POST',
    body: JSON.stringify(nuevaTarea),
  };
  // Fetch init.
  fetch(`https://js2-tareas-api.netlify.app/api/tareas?uid=${uid}`, fetchOptions)
    .then((response) => response.json())
    .then((data) => {
      // Add task at DOM.
      appendTaskDOM(data);
    });
}

// taskStatus(): Actualiza el estado de una tarea.
function taskStatus(id, complete) {
  // Recorre la lista de tareas.
  let paper = '';
  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i]._id === id) {
      tareas[i].complete = complete;
      paper = tareas[i];
      break;
    }
  };

  const fetchOptions = {
    method: 'PUT',
    body: JSON.stringify(paper),
  };

  fetch(`https://js2-tareas-api.netlify.app/api/tareas/${id}?uid=${uid}`, fetchOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log (data);
    });
}

// Delete task
function deleteTask(id) {
  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i]._id === id) {
      tareas.splice(i, 1);
      break;
    }
  }
  const fetchOptions = {
    method: 'DELETE',
  };
  fetch(`https://js2-tareas-api.netlify.app/api/tareas/${id}?uid=${uid}`, fetchOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

//
// Vista.
//

// Task list (DOM).
const lista = document.getElementById('task-list');

function appendTaskDOM(tarea) {
  // List item
  const item = document.createElement('li');
  item.className = 'task-list__item';

  // Checkbox.
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('id', `tarea-${tarea._id}`);
  checkbox.checked = tarea.complete;
  checkbox.dataset.taskId = tarea._id;

  // Label.
  const label = document.createElement('label');
  label.setAttribute('for', `tarea-${tarea._id}`);
  label.innerHTML = `${tarea.name} - ${tarea.date}`;
  // Delete button.
  const buttonDelete = document.createElement('button');
  buttonDelete.className = 'task-list__delete';
  buttonDelete.setAttribute('id', `delete-${tarea._id}`);
  buttonDelete.dataset.taskId = tarea._id;
  buttonDelete.innerHTML = 'Borrar';

  // HAVEN'T FINISHED
  const buttonDeleteChecked = document.getElementById('btn-delete');
  //

  // Add element.
  item.appendChild(checkbox);
  item.appendChild(label);
  item.appendChild(buttonDelete);
  // HAVEN'T FINISHED
  formulario.appendChild(buttonDeleteChecked);
  //
  lista.appendChild(item);

  // Task checked.
  checkbox.addEventListener('click', (event) => {
    const complete = event.currentTarget.checked;
    const taskId = event.currentTarget.dataset.taskId;
    taskStatus(taskId, complete);
  });
  // Delete task event.
  buttonDelete.addEventListener('click', (event) => {
    const taskId = event.currentTarget.dataset.taskId;
    deleteTask(taskId);
    // Delete task on DOM.
    event.currentTarget.parentNode.remove();
  });

  //
  // HAVEN'T FINISHED
  // Delete the checked ones
  buttonDeleteChecked.addEventListener('click', (event) => {
    // const taskId = event.currentTarget.dataset.taskId;
    // const complete = event.currentTarget.checked;

    deleteTask(taskId);
    // Delete task on DOM.
    event.currentTarget.parentNode.remove();

    console.log('progress...');
  });
  //

}

//
// Controller.
//

// Event handler.
// Create new task
formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  addTask(formulario.elements[0].value, formulario.elements[1].value, false);

  // Reset form.
  formulario.elements[0].value = '';
  formulario.elements[1].value = '';
});



