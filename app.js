require('@babel/register');
const path = require('path');
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Layout = require('./views/Layout');

const app = express();

const PORT = 3000;

const publicPath = path.resolve('public');

app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  const layout = React.createElement(Layout);
  const html = ReactDOMServer.renderToStaticMarkup(layout);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port: ', PORT);
});
