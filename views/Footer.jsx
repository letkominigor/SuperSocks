const React = require('react');

module.exports = function Footer() {
  return (
    <footer>
      <ul style={{
        display: 'flex', flexDirection: 'row', listStyleType: 'none', justifyContent: 'space-between',
      }}
      >
        <li>
          <a href="/">Address</a>
        </li>
        <li>
          <a href="/">Email</a>
        </li>
      </ul>
    </footer>
  );
};
