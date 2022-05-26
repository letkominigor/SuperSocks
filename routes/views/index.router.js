const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const { User } = require('../../Database/models');

const Layout = require('../../views/Layout');

router.get('/', async (req, res) => {
  if (req.session.user) {
    const user = await User.findOne({ where: { login: req.session.user.login } });
    const layout = React.createElement(Layout, { user });
    const html = ReactDOMServer.renderToStaticMarkup(layout);
    res.write('<!DOCTYPE html>');
    res.end(html);
  }
  const layout = React.createElement(Layout);
  const html = ReactDOMServer.renderToStaticMarkup(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = router;
