function clickHandler (event) {
    event.preventDefault();
    const id = event.currenttarget.getAttribute('href').substring(1);
    console.log (id);
    for (let i = 0; i < contenido.length; i++);{
        contenido[i].style.display = 'none';
            if (contenido[i].getAttribute('id') = id) {
                contenido[i].style.display = 'block';
            }
    }
}

const enlaces = document.querySelectorAll ('.tabs-tablist-item');

const contenido = document.querySelectorAll ('.tabs-content-item');

for (let i = 0; i < contenido.length; i++) {
    cintenido[i].style.display = 'none';
}

contenido[0].style.display = 'block';

for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].addEventListener('click,clickHandler');
}

