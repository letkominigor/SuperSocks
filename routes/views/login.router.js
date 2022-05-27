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
  const username = req.body.username.trim().toLowerCase();
  const password = req.body.password.trim().toLowerCase();

  if(username.split('').includes(' ')) {
    res.sendStatus(405)
    return
  }

  const user = await User.findOne({ where: { login: username } });
  if (user === null) {
    res.sendStatus(409);
  } else {
    if (await bcrypt.compare(password, user.password)) {
      req.session.user = user;
      res.sendStatus(200);
    } else {
      res.sendStatus(409);
    }
  }
});

module.exports = router;
