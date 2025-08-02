const React = require('react');
const Layout = require('../layout');

function Login() {
  return (
    <Layout title="Login">
      <h1>Login</h1>
      <form method="POST" action="/auth/login">
        <input type="email" name="email" placeholder="Email" required /><br />
        <input type="password" name="password" placeholder="Password" required /><br />
        <button>Login</button>
      </form>
    </Layout>
  );
}

module.exports = Login;
