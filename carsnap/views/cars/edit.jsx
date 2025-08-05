const React = require('react');
const Layout = require('../layout');

function Edit({ car }) {
  return (
    <Layout title={`Edit ${car.make} ${car.model}`}>
      <h1>Edit Car</h1>
      <form method="POST" action={`/cars/${car._id}?_method=PUT`}>
        <label>Company:</label>
        <input name="make" defaultValue={car.make} required />

        <label>Brand:</label>
        <input name="model" defaultValue={car.model} required />

        <label>Year:</label>
        <input type="number" name="year" defaultValue={car.year} required />

        <label>Price:</label>
        <input type="number" name="price" defaultValue={car.price} required />

        <label>Description:</label>
        <textarea name="description" defaultValue={car.description}></textarea>

        <label>Image URL:</label>
        <input name="imageUrl" defaultValue={car.imageUrl} />

        <label>Phone Number:</label>
        <input name="phone" defaultValue={car.phone} required />

        <button type="submit">Update Car</button>
      </form>
    </Layout>
  );
}

module.exports = Edit;
