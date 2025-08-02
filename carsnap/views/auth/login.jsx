const React = require('react');

function Login() {
  return (
    <div className="login-container">
      <link rel='stylesheet' href='/css/login.css'></link>
      <h1>Login to CarSnap</h1>
      <form action="/auth/login" method="POST">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Username" required />
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Password" required />
        
        <button type="submit">Login</button>
      </form>
      
      <p style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
        Don't have an account?{' '}
        <a href="/auth/signup" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '600' }}>
          Create one
        </a>
      </p>
    </div>
  );
}

module.exports = Login;
