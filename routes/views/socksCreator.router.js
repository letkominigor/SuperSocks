const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Configurator = require('../../views/Configurator');

const { Sock } = require('../../Database/models');
const { Favorite } = require('../../Database/models');

router.get('/', async (req, res) => {
  const configurator = React.createElement(Configurator, { user: req.session.user.login });
  const html = ReactDOMServer.renderToStaticMarkup(configurator);
  res.end(html);
});

router.post('/', async (req, res) => {
  const { color } = req.body;
  const { picture } = req.body;
  const { pattern } = req.body;
  console.log(req.session);

  const sock = await Sock.create({
    color, picture, pattern, user_id: req.session.user.id,
  });

  await Favorite.create({ user_id: req.session.user.id, sock_id: sock.id });

  res.redirect('/');
});

// router.get('/favourite', async (req, res) => {
// const createItem = React.createElement();
// const html = ReactDOMServer.renderToStaticMarkup(createItem);
// res.redirect('/creator');
// });

module.exports = router;
