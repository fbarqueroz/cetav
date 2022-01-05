//
// Ejercicio 2
//

var touch = 'red'

function changeColor(event) {
  if (touch == 'red') {
    event.currentTarget.style.backgroundColor = 'red';
    touch = 'blue';
  } else {
    event.currentTarget.style.backgroundColor = 'blue';
    touch = 'red';
  }
}

let elements = document.querySelectorAll('div');
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', changeColor);
}