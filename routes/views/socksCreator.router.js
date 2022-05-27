const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Configurator = require('../../views/Configurator');

const { Favorite, Sock, Purchase } = require('../../Database/models');

router.get('/', async (req, res) => {
  const configurator = React.createElement(Configurator, { user: req.session.user.login });
  const html = ReactDOMServer.renderToStaticMarkup(configurator);
  res.end(html);
});

router.post('/', async (req, res) => {
  const { color, picture, pattern } = req.body;
  console.log(color);
  console.log(req.body);

  const sock = await Sock.create({
    color, picture, pattern, user_id: req.session.user.id,
  });

  await Favorite.create({ user_id: req.session.user.id, sock_id: sock.id });
});

router.post('/buy', async (req, res) => {
  const { color, picture, pattern } = req.body;

  const sock = await Sock.create({
    color, picture, pattern, user_id: req.session.user.id,
  });

  await Purchase.create({ user_id: req.session.user.id, sock_id: sock.id });

  res.app.locals.count += 1;
  console.log(req.app.locals.count);
});

module.exports = router;
