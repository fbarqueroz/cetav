//
// Practica Clase 12
//

const homeworks =['Práctica de Javascript', 'Ir al supermercado', 'Pasear al perro', 'Lavar los platos'];
const check =['Tarea 1', 'Tarea 2', 'Tarea 3', 'Tarea 4'];
const doc_list = document.getElementById('div_list');

const list = document.createElement('ul');
doc_list.appendChild(list);

for (let i = 0;i < homeworks.length; i++) {
    const data = document.createElement('li');
    list.appendChild(data);

    const input = document.createElement('input');
    data.appendChild(input);

    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', check [i]);

    const label = document.createElement('label');
    data.appendChild(label);

    label.setAttribute('for', check[i]);
    label.innerHTML = homeworks[i];
}