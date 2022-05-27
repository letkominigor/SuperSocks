const React = require('react');

module.exports = function Navbar({ user }) {
  return (
    <header>
      {
        user
          ? (
            <nav>
              <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none' }}>
                <li style={{ marginRight: 20 }}><a href="/">Logo</a></li>
                <li style={{ marginRight: 20 }}><a href="/logout" className="js-logout">Logout</a></li>
                <li style={{ marginRight: 20 }}><a href="/creator" className="js-creator">Generate a sock</a></li>
                <li style={{ marginRight: 20 }}><a href="/socks-list" className="js-socks-list">Your socks</a></li>
              </ul>
            </nav>
          )
          : (
            <nav>
              <ul style={{ display: 'flex', flexDirection: 'row', listStyleType: 'none' }}>
                <li style={{ marginRight: 20 }}><a href="/">Logo</a></li>
                <li style={{ marginRight: 20 }}><a href="/register" className="js-register-link">Register</a></li>
                <li style={{ marginRight: 20 }}><a href="/login" className="js-login-link">Login</a></li>
                <li style={{ marginRight: 20 }}><a href="/creator" className="js-creator">Generate a sock</a></li>
              </ul>
            </nav>
          )
      }
    </header>
  );
};
