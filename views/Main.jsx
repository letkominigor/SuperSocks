const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ user }) {
  return (
    <Layout user={user}>

      <h1>Welcome to best socks site {user?.login}</h1>

    </Layout>
  );
};
