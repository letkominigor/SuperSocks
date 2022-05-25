const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Layout = require('../../views/Layout');

router.get('/', (req, res) => {
  const layout = React.createElement(Layout);
  const html = ReactDOMServer.renderToStaticMarkup(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = router;
