const React = require('react');
const Layout = require('../layout');

function Index({ cars, userId }) {
  return (
    <Layout title="All Cars" isLoggedIn={!!userId}>
      <h1 className="page-title">All Cars for Sale</h1>

      <div className="carContainer">
        {cars.map((car) => (
          <div key={car._id} className="carCard">
            
            {/* Clickable image */}
            <a href={`/cars/${car._id}`}>
              <img
                src={car.imageUrl || '/images/default-car.jpg'}
                alt={car.title}
                className="car-image"
              />
            </a>

            <p><strong>Price:</strong> ${car.price}</p>
            <p><strong>Posted by:</strong> {car.owner?.username || 'Unknown'}</p>

            {/* View link */}
            <a href={`/cars/${car._id}`} className="view-btn">View</a>

            {/* Owner controls */}
            {car.owner?._id.toString() === userId && (
              <div className="owner-controls">
                <a href={`/cars/${car._id}/edit`}>
                  <button className="edit-btn">Edit</button>
                </a>
                <form
                  method="POST"
                  action={`/cars/${car._id}?_method=DELETE`}
                  style={{ display: 'inline' }}
                >
                  <button type="submit" className="delete-btn">Delete</button>
                </form>
              </div>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = Index;
