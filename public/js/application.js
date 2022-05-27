const bodyElement = document.querySelector('.js-body');
const registerLink = document.querySelector('.js-register-link');
const loginLink = document.querySelector('.js-login-link');

const creatorForm = document.querySelector('.js-form-creator');

const sock = document.querySelector('.js-sock');
const socks = document.querySelectorAll('.js-sock');
const colorSelect = document.querySelector('.js-color');
const patternSelect = document.querySelector('.js-pattern');
const pictureSelect = document.querySelector('.js-picture');

// const buyButton = document.querySelector('.js-buy');
const deleteButton = document.querySelector('.js-delete');

// async function handleRegisterLink(e) {
//   e.preventDefault();

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

    if(response.status == 405) {
      return document.querySelector('.js-register-error').innerHTML = `Недопустимые знаки в логине`
    }
  
    if (validateAwait === 'OK') {
      window.location.href = '/'
      
    } else {
      // document.querySelector('.js-register').innerHTML += 'ИДИ НАХУЙ ПО БРАТСКИ'
      document.querySelector('.js-register-error').innerHTML = `Имя пользователя ${username.value} занято`
    }
  })
}

if (document.querySelector('.js-login')) {
  document.querySelector('.js-login').addEventListener('submit', async (event) =>{
    event.preventDefault();
  
    const { username, password } = event.target;
  
    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({username: username.value, password: password.value})
    })

    if(response.status == 405) {
      return document.querySelector('.js-login-error').innerHTML = `Недопустимые знаки в логине`
    }  
  
    if (response.status == 409) {
      document.querySelector(".js-login-error").innerHTML = 'Неправильные логин или пароль'
    } else {
      window.location.href = '/'
    }
    
  })

}


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

  // if (e.target.classList.contains('js-clear-form')) {
  //   console.log(color);
  //   color = 'red';
  //   pattern = '1';
  //   picture = '1';
  // }
}

// async function handleBuySubmit(e) {
//   e.preventDefault();

//   const {
//     method,
//     action: url,
//   } = e.target;

//   const response = await fetch(url, {
//     method,
//     headers: { 'Content-Type': 'application/json' },
//   });

//   await response.text();
// }

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
    console.log(id);

    document.getElementById(`${id}`).remove();
    const body = JSON.stringify({ id });
    const response = await fetch('socks-list', {
      method: 'PUT',
      body,
      headers: { 'content-Type': 'application/json' },
    });

    const html = await response.text();
    // document.querySelector('.js-sock-purchase').innerHTML += html;
  }
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

if (deleteButton) {
  bodyElement.addEventListener('click', handleDeleteBuntton);
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
