const React = require('react');

module.exports = function RegisterPage() {
  return (
    <form action="/register" method="POST">
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        name="username"
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        name="email"
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="text"
        name="password"
      />
    </form>
  );
};
