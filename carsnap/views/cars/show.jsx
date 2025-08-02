const React = require('react');
const Layout = require('../layout');

function Show({ car }) {
  return (
    <Layout title={car.title}>
      <h1>{car.title}</h1>
      <img src={car.image} alt={car.title} width="300" /><br />
      <p><strong>Price:</strong> {car.price} BHD</p>
      <p>{car.description}</p>

      <a href={`/cars/${car._id}/edit`}>Edit</a>
      <form method="POST" action={`/cars/${car._id}?_method=DELETE`}>
        <button type="submit">Delete</button>
      </form>
    </Layout>
  );
}

module.exports = Show;
