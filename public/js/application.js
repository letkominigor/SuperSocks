const bodyElement = document.querySelector('.js-body');
const registerLink = document.querySelector('.js-register-link');
const loginLink = document.querySelector('.js-login-link');
const favouriteButton = document.querySelector('.js-favourite');

const sock = document.querySelector('.js-sock');
const colorSelect = document.querySelector('.js-color');
const patternSelect = document.querySelector('.js-pattern');
const pictureSelect = document.querySelector('.js-picture');

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

function handleSelectColorClick(e) {
  e.preventDefault();

  const color = e.target.value;

  sock.style.setProperty('--pseudo-after-background', `${color}`);
  sock.style.setProperty('--pseudo-before-background', `${color}`);
  sock.style.background = `${color}`;
}

function handleSelectPictureClick(e) {
  e.preventDefault();

  console.log(e.target.value);
  sock.style.backgroundImage = `url(${e.target.value})`;
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

if (colorSelect) {
  colorSelect.addEventListener('click', handleSelectColorClick);
}

// if (patternSelect) {
//   patternSelect.addEventListener('click', handleSelectClick);
// }

if (pictureSelect) {
  pictureSelect.addEventListener('click', handleSelectPictureClick);
}
