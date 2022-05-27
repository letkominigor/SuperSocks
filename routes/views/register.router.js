const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const bcrypt = require('bcrypt');
const RegisterPage = require('../../views/RegisterPage');

const { User } = require('../../Database/models');
const { SALT_ROUNDS } = require('../../config/config');

router.get('/', (req, res) => {
  const registerForm = React.createElement(RegisterPage);
  const html = ReactDOMServer.renderToStaticMarkup(registerForm);
  res.write('<!DOCTYPE html>')
  res.end(html);
});

router.post('/', async (req, res) => {
  // register user in db

  const { username, password } = req.body;


  let user;

  try {
    user = await User.findOne({
      where: { login: username},
    })
  } catch (error) {
    console.log('All good');
  }

  if(user === null) {
    user = await User.create({
      login: username,
      password: await bcrypt.hash(password, SALT_ROUNDS),
      createdAt: new Date (),
      updatedAt: new Date (),
    })

    req.session.user = user;
    res.sendStatus(200);
  } else {
    res.sendStatus(409)
  }


  // const cryptedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS);
  // const user = await User.create({ login: req.body.username, password: cryptedPassword });
  // req.session.user = user;
  // res.redirect('/');
});

module.exports = router;
