const React = require('react');
const Layout = require('../layout');

function Edit({ car }) {
  return (
    <Layout title={`Edit ${car.title}`}>
      <h1>Edit Car</h1>
      <form method="POST" action={`/cars/${car._id}?_method=PUT`}>
        <input name="title" defaultValue={car.title} /><br />
        <input name="image" defaultValue={car.image} /><br />
        <input name="price" defaultValue={car.price} /><br />
        <textarea name="description" defaultValue={car.description}></textarea><br />
        <button>Update</button>
      </form>
    </Layout>
  );
}

module.exports = Edit;
