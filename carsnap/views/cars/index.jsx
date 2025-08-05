const React = require('react');
const Layout = require('../layout');

function Index({ cars, userId }) {
  return (
    <Layout title="All Cars" isLoggedIn={!!userId}>
      <h1>All Cars for Sale</h1>
      <div className='carContainer'>
      <ul>
        {cars.map((car) => (
          <li key={car._id}>
              <img
        src={car.imageUrl || '/images/default-car.jpg'}
        alt={car.title}
        width="300"
        style={{ borderRadius: '8px', marginBottom: '1rem' }}
      /><br />
            <p>Price: ${car.price}</p>
            <p>Posted by: {car.owner?.username || 'Unknown'}</p>
            <a href={`/cars/${car._id}`}>View</a>
            {car.owner?._id.toString() === userId && (
              <>
                {' | '}
                <a href={`/cars/${car._id}/edit`}>Edit</a>
                <form method="POST" action={`/cars/${car._id}?_method=DELETE`} style={{ display: 'inline' }}>
                  <button type="submit">Delete</button>
                </form>
              </>
            )}
          </li>
        ))}
      </ul>
      </div>
    </Layout>
  );
}

module.exports = Index;
