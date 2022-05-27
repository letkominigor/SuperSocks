const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const { User } = require('../../Database/models');
const Main = require('../../views/Main');
const Layout = require('../../views/Layout');

router.get('/', async (req, res) => {
  if (req.session.user) {
    const user = await User.findOne({ where: { login: req.session.user.login } });
    const main = React.createElement(Main, { user });
    const html = ReactDOMServer.renderToStaticMarkup(main);
    res.write('<!DOCTYPE html>');
    res.end(html);
  }
  const main = React.createElement(Main);
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = router;
