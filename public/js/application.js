const bodyElement = document.querySelector('.js-body');
const registerLink = document.querySelector('.js-register-link');
const loginLink = document.querySelector('.js-login-link');

const creatorForm = document.querySelector('.js-form-creator');

const sock = document.querySelector('.js-sock');
const socks = document.querySelectorAll('.js-sock');
const colorSelect = document.querySelector('.js-color');
const patternSelect = document.querySelector('.js-pattern');
const pictureSelect = document.querySelector('.js-picture');
const jsPurchases = document.querySelector('.js-purchases');

const deleteButton = document.querySelector('.js-delete');

if (document.querySelector('.js-register')) {
  document.querySelector('.js-register').addEventListener('submit', async (event) => {
    event.preventDefault();

    const { username, password } = event.target;

    const response = await fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.value, password: password.value }),
    });

    const validateAwait = await response.text();
    console.log(response);

    if (validateAwait === 'OK') {
      window.location.href = '/';
    } else {
      // document.querySelector('.js-register').innerHTML += 'ИДИ НАХУЙ ПО БРАТСКИ'
      document.querySelector('.js-register-error').innerHTML = `Имя пользователя ${username.value} занято`;
    }
  });
}

if (document.querySelector('.js-login')) {
  document.querySelector('.js-login').addEventListener('submit', async (event) => {
    event.preventDefault();

    const { username, password } = event.target;

    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username.value, password: password.value }),
    });

    if (response.status == 409) {
      document.querySelector('.js-login-error').innerHTML = 'Неправильные логин или пароль';
    } else {
      window.location.href = '/';
    }
  });
}

function handleSelectColorClick(e) {
  e.preventDefault();

  const color = e.target.value;
  sock.style.setProperty('--pseudo-after-background', `${color}`);
  sock.style.setProperty('--pseudo-before-background', `${color}`);
  sock.style.backgroundColor = `${color}`;
}

function handleSelectPictureClick(e) {
  e.preventDefault();

  sock.style.backgroundImage = `url(${e.target.value})`;
}

// function handleSelectPatternClick(e) {
//   e.preventDefault();

// }

async function handleFormSubmit(e) {
  e.preventDefault();

  const color = colorSelect.value;
  const pattern = patternSelect.value;
  const picture = pictureSelect.value;
  const body = JSON.stringify({ color, pattern, picture });

  if (e.target.classList.contains('js-favourite')) {
    const response = await fetch('/creator', {
      method: 'POST',
      body,
      headers: { 'Content-Type': 'application/json' },
    });

    await response.text();
  }

  if (e.target.classList.contains('js-buy')) {
    const response = await fetch('/creator/buy', {
      method: 'POST',
      body,
      headers: { 'Content-Type': 'application/json' },
    });

    await response.text();
  }
}

async function handleDeleteBuntton(e) {
  e.preventDefault();

  if (e.target.classList.contains('js-delete')) {
    const { id } = e.target.parentNode.parentNode;
    document.getElementById(`${id}`).remove();
    const body = JSON.stringify({ id });
    const response = await fetch('socks-list', {
      method: 'DELETE',
      body,
      headers: { 'Content-Type': 'application/json' },
    });

    await response.text();
  }

  if (e.target.classList.contains('js-buy')) {
    const { id } = e.target.parentNode.parentNode;

    document.getElementById(`${id}`).remove();
    const body = JSON.stringify({ id });
    const response = await fetch('socks-list', {
      method: 'PUT',
      body,
      headers: { 'content-Type': 'application/json' },
    });

    const html = await response.text();
    jsPurchases.innerHTML += html;
    if (deleteButton) {
      bodyElement.addEventListener('click', handleDeleteBuntton);
    }
  }
}

if (creatorForm) {
  creatorForm.addEventListener('click', handleFormSubmit);
}

if (deleteButton) {
  bodyElement.addEventListener('click', handleDeleteBuntton);
}

if (colorSelect) {
  colorSelect.addEventListener('click', handleSelectColorClick);
}

if (pictureSelect) {
  pictureSelect.addEventListener('click', handleSelectPictureClick);
}
