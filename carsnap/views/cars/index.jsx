const React = require('react');
const Layout = require('../layout');

function Index({ cars }) {
  return (
    <Layout title="Car List">
      <h1>All Cars</h1>
      <ul>
        {cars.map(car => (
          <li key={car._id}>
            <a href={`/cars/${car._id}`}>{car.title}</a> - {car.price} BHD
          </li>
        ))}
      </ul>
    </Layout>
  );
}

module.exports = Index;
