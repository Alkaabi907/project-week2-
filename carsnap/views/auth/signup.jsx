import React from 'react';

export default function Signup() {
  return (
    <html>
      <head>
        <title>Signup</title>
      </head>
      <body>
        <h1>Create a CarSnap Account</h1>
        <form action="/auth/signup" method="POST">
          <label>Email:</label>
          <input type="email" name="email" required />
          <br />
          <label>Password:</label>
          <input type="password" name="password" required />
          <br />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="/auth/login">Login here</a></p>
      </body>
    </html>
  );
}
