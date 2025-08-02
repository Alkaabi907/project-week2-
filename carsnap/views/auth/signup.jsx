const React = require('react');

function Signup() {
  return (
    <html>
      <head>
        <title>Signup</title>
        <link rel="stylesheet" href="/css/signup.css" />
      </head>
      <body>
        <div className="signup-container">
          <h1>Create a CarSnap Account</h1>
          <form action="/auth/signup" method="POST">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            
            <button type="submit">Sign Up</button>
          </form>
          <p>Already have an account? <a href="/auth/login">Login here</a></p>
        </div>
      </body>
    </html>
  );
}

module.exports = Signup;
