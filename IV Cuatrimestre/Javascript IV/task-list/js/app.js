let formTask = document.getElementById('formTask').addEventListener('submit', saveTask);

class Tasks {
  constructor (title, description) {
    this.title = title;
    this.description = description;
  }
}

let task = new Tasks();

function saveTask(event) {

  task.title = document.getElementById('title').value;
  task.description = document.getElementById('description').value;

  if(localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks();
  formTask.reset();
  event.preventDefault();
}

function deleteTask(title) {
  console.log(title)
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';
  let deleteCheckedOnes = document.getElementById('delete-checked');

  //Delete all checked ones
  deleteCheckedOnes.addEventListener('click', () => {
      const tasksChecked = document.querySelectorAll('input[type=checkbox]');
      for (let i = 0; i < tasksChecked.length; i++) {
          if (tasksChecked[i].checked == true) {
          const tasksParent = tasksChecked[i].parentElement;
          tasksParent.remove(i, 1);
          }
      }
  });

  //Create Tasks
  for(let i = 0; i < tasks.length; i++) {
      let title = tasks[i].title;
      let description = tasks[i].description;
      let fecha =  new Date();
      const horaActual = fecha.getHours() + ":" + fecha.getMinutes();

      tasksView.innerHTML += `<div class="card mb-3">
          <div class="taskContainer">
          <input type="checkbox" name="checkboxes" id="checkbox">
          <label>
              ${title} - ${description} - Creado a las: ${horaActual}
          </label>
          <button href="#" onclick="deleteTask('${title}')" class="deleteBtn ml-5">Delete</button>
          </div>
      </div>`;
  }
}

getTasks();