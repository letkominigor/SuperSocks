const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const { User, Sock } = require('../../Database/models');

const PersonalAccount = require('../../views/PersonalAccount');

router.get('/', async (req, res) => {
  // const favoriteSocks = await Favorite.findAll({
  //   where: { user_id: req.session.user.id },
  //   include: {
  //     model: Sock,
  //   },
  // });
  const user = await User.findAll({
    raw: true,
    include: {
      model: Sock,
    },
  });
  const personalAccount = React.createElement(PersonalAccount, { user });
  const html = ReactDOMServer.renderToStaticMarkup(personalAccount);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = router;
