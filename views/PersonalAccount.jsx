const React = require('react');
const FavoriteSock = require('./FavoriteSock');
const Layout = require('./Layout');

module.exports = function PersonalAccount({ user, socks }) {
  return (
    <Layout user={user}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {
          socks.map((sock) => <FavoriteSock key={sock.id} sock={sock} />)
        }
      </div>
      <div style={{ display: 'flex' }}>
        <button type="submit" className="js-buy">Buy</button>
        <button type="submit" className="js-delete">Delete</button>
      </div>
      <div />

      <form action="/account" method="POST" className="Favorite">
        <div className="Icon">
          <img src="" alt="" />

        </div>
      </form>
      {/* <form action="/account" method="GET" className="Purchased">
        <div className="Icon">
          <img src="" alt="" />
          <button type="submit" className="delete">Delete</button>
        </div>
      </form> */}
    </Layout>

  );
};
