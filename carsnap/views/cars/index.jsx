const React = require('react');
const Layout = require('../layout');

function Index({ cars, userId }) {
  return (
    <Layout title="Car List" isLoggedIn={!!userId}>
      <h1>🚗 All Cars</h1>

      <a href="/cars/new" style={{ display: 'inline-block', marginBottom: '1rem' }}>➕ Add New Car</a>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cars.map(car => {
          const ownerId = car.owner?._id || car.owner;

          return (
            <li key={car._id} style={{ border: '1px solid #ccc', marginBottom: '1rem', padding: '1rem', borderRadius: '8px' }}>
              <img
                src={car.imageUrl || '/images/default-car.jpg'}
                alt={car.title}
                style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '4px' }}
              />

              <h2><a href={`/cars/${car._id}`}>{car.title}</a></h2>
              <p><strong>Price:</strong> {car.price} BHD</p>
              <p><strong>Description:</strong> {car.description || 'No description available.'}</p>

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
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

module.exports = Index;
