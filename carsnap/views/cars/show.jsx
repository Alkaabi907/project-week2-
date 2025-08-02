const React = require('react');
const Layout = require('../layout');

function Show({ car, userId }) {
  const ownerId = car.owner?._id || car.owner;

  return (
    <Layout title={car.title} isLoggedIn={!!userId}>
      <h1>{car.title}</h1>

      <img
        src={car.imageUrl || '/images/default-car.jpg'}
        alt={car.title}
        width="300"
        style={{ borderRadius: '8px', marginBottom: '1rem' }}
      /><br />

      <p><strong>Price:</strong> {car.price} BHD</p>
      <p><strong>Description:</strong> {car.description || 'No description provided.'}</p>

      {/* Debug info */}
      <p style={{ fontSize: '0.9rem', color: '#888' }}>
        Logged in user: {userId}<br />
        Car owner: {String(ownerId)}
      </p>

      {/* Edit/Delete buttons for owner only */}
      {userId && ownerId && String(userId) === String(ownerId) && (
        <div style={{ marginTop: '1rem' }}>
          <a href={`/cars/${car._id}/edit`} style={{ marginRight: '1rem' }}>✏️ Edit</a>
          <form method="POST" action={`/cars/${car._id}?_method=DELETE`} style={{ display: 'inline' }}>
            <button type="submit" style={{
              backgroundColor: '#ff4d4d',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              🗑️ Delete
            </button>
          </form>
        </div>
      )}

      <div style={{ marginTop: '2rem' }}>
        <a href="/cars" style={{ marginRight: '1rem' }}>← Back to All Cars</a>
        <a href="/cars/new">➕ Add Another Car</a>
      </div>
    </Layout>
  );
}

module.exports = Show;
