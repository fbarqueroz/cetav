//
// Practica Clase 8
//

let num1 = ' #'
let num2 = '# '
let space1 = ' '
let space2 = ' '
const size = 8

for (let i = 0; i < size; i++) {
    space1 = space1 + num1;
    space2 = space2 + num2;
}

for (let j = 0; j <= size; j++) {
    if (j % 2 == 0) {
        console.log (space1);
    } else {
        console.log (space2);
    }
} 