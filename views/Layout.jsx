const React = require('react');
const Navbar = require('./Navbar');
const Main = require('./Main');
const Footer = require('./Footer');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="/js/application.js" defer />
        <title>Super Socks</title>
      </head>
      <body>
        <Navbar />
        <Main />
        {children}
        <Footer />
      </body>
    </html>
  );
};
