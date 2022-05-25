const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const bcrypt = require('bcrypt');
const LoginPage = require('../../views/LoginPage');

const { User } = require('../../Database/models');

router.get('/', (req, res) => {
  const loginPage = React.createElement(LoginPage);
  const html = ReactDOMServer.renderToStaticMarkup(loginPage);
  res.end(html);
});

router.post('/', async (req, res) => {
  const user = await User.findOne({ where: { login: req.body.username } });
  if (await bcrypt.compare(req.body.password, user.password)) {
    req.session.user = user;
    res.redirect('/');
  }
  res.end('Error');
});

module.exports = router;
