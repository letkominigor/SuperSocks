const React = require('react');
const Layout = require('./Layout');

module.exports = function RegisterPage() {
  return (
    <Layout>
    <form action="/register" method="POST" className="js-register">
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
    <div className="js-div-error"></div>
    </Layout>
  );
};
