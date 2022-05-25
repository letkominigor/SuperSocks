require('@babel/register');
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Layout = require('./views/Layout');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  const layout = React.createElement(Layout);
  const html = ReactDOMServer.renderToStaticMarkup(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});
