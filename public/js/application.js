const bodyElement = document.querySelector('.js-body');
const registerLink = document.querySelector('.js-register-link');
const loginLink = document.querySelector('.js-login-link');
const favouriteButton = document.querySelector('.js-favourite');

async function handleRegisterLink(e) {
  e.preventDefault();

  const response = await fetch('/register', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  const html = await response.text();
  bodyElement.innerHTML = html;
}

async function handleLoginLink(e) {
  e.preventDefault();

  const response = await fetch('/login', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  const html = await response.text();
  bodyElement.innerHTML = html;
}

async function handleFavouriteSubmit(e) {
  e.preventDefault();
}

if (registerLink) {
  registerLink.addEventListener('click', handleRegisterLink);
}

if (loginLink) {
  loginLink.addEventListener('click', handleLoginLink);
}

if (favouriteButton) {
  favouriteButton.addEventListener('submit', handleFavouriteSubmit);
}
