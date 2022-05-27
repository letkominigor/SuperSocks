const bodyElement = document.querySelector('.js-body');
const registerLink = document.querySelector('.js-register-link');
const loginLink = document.querySelector('.js-login-link');
const buyButton = document.querySelector('.js-buy');
// const favouriteButton = document.querySelector('.js-favourite');
const creatorForm = document.querySelector('.js-form-creator');
// const basket = document.querySelector('.js-basket');

const sock = document.querySelector('.js-sock');
const colorSelect = document.querySelector('.js-color');
const patternSelect = document.querySelector('.js-pattern');
const pictureSelect = document.querySelector('.js-picture');


// document.querySelector('.js-register').addEventListener('submit', (event) => {
//   event.preventDefault()
//   console.log('KOSTYA DRUG ADICTET');
// })
if (document.querySelector('.js-register')) {
  document.querySelector('.js-register').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const { username, password } = event.target
  
  
    const response = await fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({username: username.value, password: password.value})
    })
  
    const validateAwait = await response.text();
    console.log(response);  
  
    if (validateAwait === 'OK') {
      window.location.href = '/'
      
    } else {
      // document.querySelector('.js-register').innerHTML += 'ИДИ НАХУЙ ПО БРАТСКИ'
      document.querySelector('.js-register-error').innerHTML = `Имя пользователя ${username.value} занято`
    }
  })
}


document.querySelector('.js-login').addEventListener('submit', async (event) =>{
  event.preventDefault();

  const { username, password } = event.target;

  const response = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({username: username.value, password: password.value})
  })


  if (response.status == 409) {
    document.querySelector(".js-login-error").innerHTML = 'Неправильные логин или пароль'
  } else {
    window.location.href = '/'
  }
  
})

// async function handleRegisterLink(e) {
//   e.preventDefault();
  
  
//   const response = await fetch('/register', {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' },
//   });
  
//   const html = await response.text();
//   bodyElement.innerHTML = html;


    
//   })
  
  
// }

// async function handleLoginLink(e) {
//   e.preventDefault();

//   const response = await fetch('/login', {
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' },
//   });

//   const html = await response.text();
//   bodyElement.innerHTML = html;
// }

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

async function handleFormSubmit(e) {
  e.preventDefault();

  let color = colorSelect.value;
  let pattern = patternSelect.value;
  let picture = pictureSelect.value;
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

  if (e.target.classList.contains('js-clear-form')) {
    color = 'red';
    pattern = 1;
    picture = 1;
  }
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

// if (registerLink) {
//   registerLink.addEventListener('click', handleRegisterLink);
// }

// if (loginLink) {
//   loginLink.addEventListener('click', handleLoginLink);
// }

if (creatorForm) {
  creatorForm.addEventListener('click', handleFormSubmit);
}

// if (buyButton) {
//   buyButton.addEventListener('submit', handleBuySubmit);
// }

if (colorSelect) {
  colorSelect.addEventListener('click', handleSelectColorClick);
}

// if (patternSelect) {
//   patternSelect.addEventListener('click', handleSelectPatternClick);
// }

if (pictureSelect) {
  pictureSelect.addEventListener('click', handleSelectPictureClick);
}
