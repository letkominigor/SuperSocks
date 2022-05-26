const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const { Favorite, Sock } = require('../../Database/models');

const PersonalAccount = require('../../views/PersonalAccount');

router.get('/', async (req, res) => {
  const favoriteSocks = await Favorite.findAll({
    where: { user_id: req.session.user.id },
    include: {
      model: Sock,
    },
  });
  console.log(favoriteSocks);
  const personalAccount = React.createElement(PersonalAccount, { favoriteSocks });
  const html = ReactDOMServer.renderToStaticMarkup(personalAccount);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = router;
