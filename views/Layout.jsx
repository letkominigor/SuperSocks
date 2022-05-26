const React = require('react');
const Navbar = require('./Navbar');
const Main = require('./Main');
const Footer = require('./Footer');
// const PersonalAccount = require('./PersonalAccount');

module.exports = function Layout({ user, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="/js/application.js" defer />
        <title>Super Socks</title>
      </head>
      <body className="js-body">
        <Navbar user={user} />
        <Main />
        {children}
        <Footer />
      </body>
    </html>
  );
};
