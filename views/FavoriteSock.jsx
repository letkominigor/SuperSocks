const React = require('react');

module.exports = function FavoriteSock({ sock }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        PICTURE
      </div>
      <div>Цвет: {sock.color}</div>
      <div>Картинка: {sock.picture}</div>
      <div>Узор: {sock.pattern}</div>
    </div>
  );
};
