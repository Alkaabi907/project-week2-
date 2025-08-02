const React = require('react');
const Layout = require('../layout');

function Signup() {
  return (
    <Layout title="Signup">
      <h1>Signup</h1>
      <form method="POST" action="/auth/signup">
        <input type="text" name="username" placeholder="Username" required /><br />
        <input type="email" name="email" placeholder="Email" required /><br />
        <input type="password" name="password" placeholder="Password" required /><br />
        <button>Signup</button>
      </form>
    </Layout>
  );
}

module.exports = Signup;
