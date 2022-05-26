const React = require('react');

module.exports = function FavoriteSock({ sock }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        PICTURE
      </div>
      <div>Цвет: {sock['Sock.color']}</div>
      <img src={`${sock['Sock.picture']}`} alt="picture" style={{ width: 75, height: 80, borderRadius: 10 }} />
      <div>Узор: {sock['Sock.pattern']}</div>
    </div>
  );
};
