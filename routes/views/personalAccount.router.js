const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const { Sock, Favorite } = require('../../Database/models');

const PersonalAccount = require('../../views/PersonalAccount');

router.get('/', async (req, res) => {
  const userId = req.session.user.id;
  const socks = await Favorite.findAll({
    raw: true,
    where: { user_id: userId },
    include: {
      model: Sock,
    },
  });
  console.log(socks);
  const user = req.session.user.login;
  const personalAccount = React.createElement(PersonalAccount, { user, socks });
  const html = ReactDOMServer.renderToStaticMarkup(personalAccount);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = router;
