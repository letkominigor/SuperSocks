const React = require('react');

module.exports = function FavoriteSock({ sock }) {
  return (
    <div
      id={sock.sock_id}
      style={{ display: 'flex', flexDirection: 'column', marginLeft: 100 }}
    >
      <div
        // id={sock.sock_id}
        data-id={sock.sock_id}
        className="js-sock sock"
        style={{
          marginTop: 50,
          marginBottom: 350,
          backgroundColor: sock['Sock.color'],
          '--pseudo-before-background': sock['Sock.color'],
          '--pseudo-after-background': sock['Sock.color'],
          backgroundImage: `url("${sock['Sock.picture']}")`,
        }}
      >
        <div className="js-sock-picture sock-picture" />
        <div className="sock-pattern" />
      </div>
      <div>Цвет: {sock['Sock.color']}</div>
      <img src={`${sock['Sock.picture']}`} alt="picture" style={{ width: 75, height: 80, borderRadius: 10 }} />
      <div>Узор: {sock['Sock.pattern']}</div>
      <div style={{ display: 'flex' }}>
        <button type="submit" className="js-buy">Buy</button>
        <button type="submit" className="js-delete">Delete</button>
      </div>
    </div>
  );
};
