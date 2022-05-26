const bodyElement = document.querySelector('.js-body');
const registerLink = document.querySelector('.js-register-link');
const loginLink = document.querySelector('.js-login-link');
const buyButton = document.querySelector('.js-buy');
const favouriteButton = document.querySelector('.js-favourite');
const basket = document.querySelector('.js-basket');

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

function handleSelectColorClick(e) {
  e.preventDefault();

  const color = e.target.value;
  sock.style.setProperty('--pseudo-after-background', `${color}`);
  sock.style.setProperty('--pseudo-before-background', `${color}`);
  sock.style.background = `${color}`;
}

function handleSelectPictureClick(e) {
  e.preventDefault();

  sock.style.backgroundImage = `url(${e.target.value})`;
}

// function handleSelectPatternClick(e) {
//   e.preventDefault();

// }

async function handleFavouriteSubmit(e) {
  e.preventDefault();
}

async function handleBuySubmit(e) {
  e.preventDefault();

  const {
    method,
    action: url,
  } = e.target;

  const response = await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
  });

  await response.text();
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

if (buyButton) {
  buyButton.addEventListener('submit', handleBuySubmit);
}

if (colorSelect) {
  colorSelect.addEventListener('click', handleSelectColorClick);
}

// if (patternSelect) {
//   patternSelect.addEventListener('click', handleSelectPatternClick);
// }

if (pictureSelect) {
  pictureSelect.addEventListener('click', handleSelectPictureClick);
}
