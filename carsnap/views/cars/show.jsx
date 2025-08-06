const React = require('react');
const Layout = require('../layout');

function Show({ car, userId }) {
  const ownerId = car.owner?._id || car.owner;

  return (
    <Layout title={car.title} isLoggedIn={!!userId}>
      
      <div className="car-details-card">
        <h1 style={{ fontSize: '2.5rem', color: '#0077cc', marginBottom: '1rem' }}>{car.title}</h1>

        <img
          src={car.imageUrl || '/images/default-car.jpg'}
          alt={car.title}
          style={{
            width: '100%',
            maxWidth: '700px',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
            margin: '2rem auto',
            display: 'block'
          }}
        />

        <p style={{ fontSize: '1.5rem', color: '#444' }}><strong>💰 Price:</strong> {car.price} BHD</p>
        <p style={{ fontSize: '1.2rem' }}><strong>📝 Description:</strong> {car.description || 'No description provided.'}</p>

        {car.phone && (
          <p style={{ fontSize: '1.2rem' }}><strong>📞 Phone:</strong> {car.phone}</p>
        )}

        <p style={{ fontSize: '0.9rem', color: '#888', marginTop: '1rem' }}>
          Logged in user: {userId}<br />
          Car owner: {String(ownerId)}
        </p>

        {userId && ownerId && String(userId) === String(ownerId) && (
          <div className="owner-controls">
            <a href={`/cars/${car._id}/edit`} className="edit-btn">✏️ Edit</a>
            <form method="POST" action={`/cars/${car._id}?_method=DELETE`} style={{ display: 'inline' }}>
              <button type="submit" className="delete-btn">🗑️ Delete</button>
            </form>
          </div>
        )}

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a href="/cars" className="view-btn">← Back to All Cars</a>
          <a href="/cars/new" className="view-btn">➕ Add Another Car</a>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Show;
