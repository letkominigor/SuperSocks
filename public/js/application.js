const bodyElement = document.querySelector('.js-body');
const registerLink = document.querySelector('.js-register-link');
const logoLink = document.querySelector('.js-login-link');

async function handleRegisterLink(e) {
  e.preventDefault();

  const response = await fetch('/register', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  const html = await response.text();
  bodyElement.innerHTML = html;
}

if (registerLink) {
  registerLink.addEventListener('click', handleRegisterLink);
}
