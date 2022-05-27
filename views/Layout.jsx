const React = require('react');
const Navbar = require('./Navbar');
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
        <link rel="stylesheet" href="/styles/style.css" />
        <title>Super Socks</title>
      </head>
      <body className="js-body">
        <Navbar user={user} className="js-navbar" />
        {children}
        <Footer />
      </body>
    </html>
  );
};
