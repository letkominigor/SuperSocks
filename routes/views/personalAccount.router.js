const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const { Sock, Favorite, Purchase } = require('../../Database/models');

const PersonalAccount = require('../../views/PersonalAccount');

router.get('/', async (req, res) => {
  const userId = req.session.user.id;
  const favoriteSocks = await Favorite.findAll({
    raw: true,
    where: { user_id: userId },
    include: {
      model: Sock,
    },
  });
  const purchaseSocks = await Purchase.findAll({
    raw: true,
    where: { user_id: userId },
    include: {
      model: Sock,
    },
  });
  console.log(purchaseSocks);
  const user = req.session.user.login;
  const personalAccount = React.createElement(PersonalAccount, { user, favoriteSocks, purchaseSocks });
  const html = ReactDOMServer.renderToStaticMarkup(personalAccount);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.delete('/', async (req, res) => {
  await Favorite.destroy({ where: { sock_id: req.body.id } });
  await Sock.destroy({ where: { id: req.body.id } });
});

router.put('/', async (req, res) => {
  console.log(req.body.id);

  await Purchase.create({ user_id: req.session.user.id, sock_id: req.body.id });
  await Favorite.destroy({ where: { sock_id: req.body.id } });
});

module.exports = router;
