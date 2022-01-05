//
// Practica en Clase
//
const enlaces = document.querySelectorAll('.tabs-tablist-item');

const contentido = document.querySelectorAll('.tabs-content-item');

for(let i = 0; i < contentido.length; i++){
    contentido[i].classList.add('js-content-hidden');
}

contentido[0].classList.remove('js-content-hidden');

enlaces[0].classList.remove('js-active');

for(let i = 0; i < enlaces.length; i++){
    enlaces[i].addEventListener('click' , (event) => {
    const id = event.currentTarget.getAttribute('href').substring(1);
    console.log(id);

    for(let i = 0; i < contentido.length; i++){
        contentido[i].classList.add('js-content-hidden');
        if (contentido[i].getAttribute('id') == id){
            contentido[i].classList.remove('js-content-hidden');
        }
    }
    for(let i = 0; i < enlaces.length; i++){
        enlaces[i].classList.remove('js-active');
    }
    event.currentTarget.classList.add('js-active')
    });
}

// Oculta todos los elementos, excepto el primero.
// Se usa el método substring(1) para eliminar el primer caracter ('#').
updateVisibleContent(enlaces[0].getAttribute('href').substring(1));
