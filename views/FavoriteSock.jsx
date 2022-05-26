const React = require('react');

module.exports = function FavoriteSock({ sock }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        PICTURE
      </div>
      <div>Цвет: {sock['Sock.color']}</div>
      <div>Узор: {['Sock.picture']}</div>
      <div>Узор: {sock['Sock.pattern']}</div>
    </div>
  );
};
