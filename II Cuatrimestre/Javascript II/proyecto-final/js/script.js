//
// Fabian Barquero's Proyect
//

const form = document.getElementById('form');
const formList = document.getElementById('listItem');
const items = [];

// Data form
function formInfo(formName, formMail, formPhone, formSubject, formMessage) {
  const InfoItems = {
    name: formName,
    email: formMail,
    phone: formPhone,
    subject: formSubject,
    message: formMessage,
  };

  function appendTaskDOM() {
    const item = document.createElement('ul');
    item.className = 'listItem';

    // Name
    const liName = document.createElement('li');
    liName.innerHTML = `${InfoItems.name}`;
    item.appendChild(liName);

    // Email
    const liEmail = document.createElement('li');
    liEmail.innerHTML = `${InfoItems.email}`;
    item.appendChild(liEmail);

    // Phone
    const liPhone = document.createElement('li');
    liPhone.innerHTML = `${InfoItems.phone}`;
    item.appendChild(liPhone);

    // Subject
    const liSubject = document.createElement('li');
    liSubject.innerHTML = `${InfoItems.subject}`;
    item.appendChild(liSubject);

    // Message
    const liMessage = document.createElement('li');
    liMessage.innerHTML = `${InfoItems.message}`;
    item.appendChild(liMessage);

    formList.appendChild(item);
  }

  // Array
  items.push(InfoItems);

  const fetchOptions = {
    method: 'POST',
    body: JSON.stringify(InfoItems),
  };
  fetch('https://js2-contact-form-api.netlify.app/api/contact', fetchOptions)
    .then((response) => response.json())
    .then((data) => {
      appendTaskDOM();
      console.log(data);
    });
}

// Limpia casillas despues del Submit
form.addEventListener('submit', (event) => {
  event.preventDefault();
  formInfo(form.elements[0].value, form.elements[1].value, form.elements[2].value,
    form.elements[3].value, form.elements[4].value, form.elements[5].value);
  form.elements[0].value = '';
  form.elements[1].value = '';
  form.elements[2].value = '';
  form.elements[3].value = '';
  form.elements[4].value = '';
  form.elements[5].value = '';
});

// Hide form
function hideForm() {
  const hideInfo = document.getElementById('form');
  if (hideInfo.style.display === 'none') {
    hideInfo.style.display = 'block';
  } else {
    hideInfo.style.display = 'none';
  }
}
