const React = require('react');

function Navbar({ isLoggedIn = false }) {
  return (
    <nav style={{ marginBottom: '2rem' }}>
      <a href="/cars">🏠 Home</a> |{' '}
      <a href="/cars/new">➕ Sell a Car</a> |{' '}
      {!isLoggedIn ? (
        <>
         
        </>
      ) : (
        <form method="POST" action="/auth/logout" style={{ display: 'inline' }}>
          <button type="submit">Logout</button>
        </form>
      )}
    </nav>
  );
}

module.exports = Navbar;
