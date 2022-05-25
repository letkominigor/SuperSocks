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
  res.end(html);
});

router.post('/', async (req, res) => {
  // register user in db
  const cryptedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS);
  const user = await User.create({ login: req.body.username, password: cryptedPassword });
  req.session.user = user;
  res.redirect('/');
});

module.exports = router;
