const React = require('react');
const FavoriteSock = require('./FavoriteSock');
const Layout = require('./Layout');
const PurchasedSock = require('./PurchasedSock');

module.exports = function PersonalAccount({ user, favoriteSocks, purchaseSocks }) {
  return (
    <Layout user={user}>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {
            favoriteSocks.length
              ? favoriteSocks.map((sock) => <FavoriteSock key={sock.id} sock={sock} />)
              : (<>There is no fav socks</>)
          }
        </div>
        <div>
          {
            purchaseSocks.length
              ? purchaseSocks.map((sock) => <PurchasedSock key={sock.id} sock={sock} />)
              : (<>There is no purchased socks</>)
          }
        </div>
      </div>

    </Layout>
  );
};
