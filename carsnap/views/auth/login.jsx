const React = require('react');

function Login() {
  return (
    <html>
      <head>
        <title>Login to CarSnap</title>
        <link rel="stylesheet" href="/css/login.css" />
      </head>
      <body>
        <div className="login-container">
          <h1>Login to CarSnap</h1>
          <form action="/auth/login" method="POST">
            <label htmlFor="login">Username or Email</label>
            <input
              type="text"
              id="login"
              name="login"
              placeholder="Enter username or email"
              required
            />
            
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
            
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account? <a href="/auth/signup">Create one</a>
          </p>
        </div>
      </body>
    </html>
  );
}

module.exports = Login;
