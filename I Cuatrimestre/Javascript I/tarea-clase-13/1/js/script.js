//
// Practica Clase 13
//

/*Math.floor(Math.random() * (max - min) + min)*/
/*rgb (X, Y, Z)*/
/* Min = 0  Max = 255*/

let min = 0;
let max = 256;
let div = document.querySelectorAll ('.mouseenter p');

function colors () {
    let x = Math.floor(Math.random() * (max - min) + min);
    let y = Math.floor(Math.random() * (max - min) + min);
    let z = Math.floor(Math.random() * (max - min) + min);
    return `rgb(${x},${y},${z})`;
}
for (let i = 0; i < div.length; i++) {
        div[i].addEventListener ('mouseenter',select_color);
        div[i].addEventListener ('mouseleave',unselect_color);
}

function select_color () {
    const p = event.currentTarget;
    p.style.color = colors();
}

function unselect_color () {
    const p = event.currentTarget;
    p.style.color = 'Black';
}

