const React = require('react');
const Layout = require('./layout');

function NotFound() {
  return (
    <Layout title="404 Not Found">
      <h1>Page Not Found</h1>
      <a href="/cars">Go Home</a>
    </Layout>
  );
}

module.exports = NotFound;
