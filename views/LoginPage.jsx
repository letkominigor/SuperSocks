const React = require('react');

module.exports = function LoginPage() {
  return (
    <form action="/login" method="POST" className="js-login">
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        name="username"
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="text"
        name="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
