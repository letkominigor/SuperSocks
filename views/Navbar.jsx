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
                <li><a href="/logout" className="js-logout">Logout</a></li>
                <li><a href="/creator" className="js-creator">Generate a sock</a></li>
                <li><a href="/socks-list" className="js-socks-list">Your socks</a></li>
              </ul>
            </nav>
          )
          : (
            <nav>
              <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none' }}>
                <li><a href="/">Logo</a></li>
                <li><a href="/register" className="js-register-link">Register</a></li>
                <li><a href="/login" className="js-login-link">Login</a></li>
                <li><a href="/creator" className="js-creator">Generate a sock</a></li>
              </ul>
            </nav>
          )
      }
    </header>
  );
};
