const React = require('react');

module.exports = function PersonalAccount() {
  return (
    <div>
      <form action="/account" method="POST" className="Favorite">
        <div className="Icon">
          <img src="" alt="" />
          <button type="submit" className="buy">Buy</button>
          <button type="submit" className="delete">Delete</button>
        </div>
      </form>
      <form action="/account" method="GET" className="Purchased">
        <div className="Icon">
          <img src="" alt="" />
          <button type="submit" className="delete">Delete</button>
        </div>
      </form>
    </div>

  );
};
