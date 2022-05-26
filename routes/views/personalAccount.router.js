const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const bcrypt = require('bcrypt');
const PersonalAccount = require('../../views/PersonalAccount');


router.get('/', (req, res) => {
  const personalAccount = React.createElement(PersonalAccount);
  const html = ReactDOMServer.renderToStaticMarkup(personalAccount);
  res.end(html);
});

router.post('/', async(req, res)=>{
    const 
})
