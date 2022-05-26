const React = require('react');
const Navbar = require('./Navbar');
const Main = require('./Main');
const Footer = require('./Footer');

module.exports = function Configurator({ user, children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="/js/application.js" defer />
        <title>Super Socks</title>
      </head>
      <body className="js-configurator">
        <Navbar user={user} />
        <Main />
        цвет
        <select className="colorselect" data-action="" name="select-one">
          <option>красный</option>
          <option>синий</option>
          <option>зелёный</option>
          <option>оранжевый</option>
          <option>жёлтый</option>
          <option>чёрный</option>
          <option>голубой</option>
        </select>
        узор
        <select className="patternselect" data-action="" name="select-two">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
        </select>
        картинка
        <select className="pictureselect" data-action="" name="select-three">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
        </select>
        {children}
        <Footer />
      </body>
    </html>
  );
};
