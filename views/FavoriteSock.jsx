const React = require('react');

module.exports = function FavoriteSock({ sock }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        PICTURE
      </div>
      <div>Цвет: {sock['Socks.color']}</div>
      <div>Картинка: {sock['Socks.picture']}</div>
      <div>Узор: {sock['Socks.pattern']}</div>
    </div>
  );
};
