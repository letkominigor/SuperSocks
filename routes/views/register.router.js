const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const RegisterPage = require('../../views/RegisterPage');

router.get('/', (req, res) => {
  const registerForm = React.createElement(RegisterPage);
  const html = ReactDOMServer.renderToStaticMarkup(registerForm);
  res.end(html);
});

router.post('/', (req, res) => {
  // register user in db
  // const user = User.create({ username: req.body.username, password: req.body.password });
  res.redirect('/');
});

module.exports = router;
