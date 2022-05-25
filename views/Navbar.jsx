const React = require('react');

module.exports = function Navbar({ user }) {
  return (
    <header>
      {
        user
          ? (
            <nav>
              <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none' }}>
                <li><a href="/">Logo</a></li>
                <li><a href="/">Logout</a></li>
                <li><a href="/">Favourite</a></li>
                <li><a href="/">Shop basket</a></li>
                <li><a href="/">Socks</a></li>
              </ul>
            </nav>
          )
          : (
            <nav>
              <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none' }}>
                <li><a href="/">Logo</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/">Login</a></li>
                <li><a href="/">Socks</a></li>
              </ul>
            </nav>
          )
      }
    </header>

  );
};
