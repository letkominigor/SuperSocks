const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { Socks } = require('../../Database/models');
const Configurator = require('../../views/Configurator');

router.get('/', async (req, res) => {
  const configurator = React.createElement(Configurator);
  const html = ReactDOMServer.renderToStaticMarkup(configurator);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/', async (req, res) => {
  const color = req.body;
  const picture = req.body;
  const pattern = req.body;

  const createItem = React.createElement();

  const html = ReactDOMServer.renderToStaticMarkup(createItem);

  res.end(html);
});
