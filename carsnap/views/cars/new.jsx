const React = require('react');
const Layout = require('../layout');

function New({ error }) {
  return (
    <Layout title="Sell a Car">
      <h1>Sell a Car</h1>
      <div className='sellCar'>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form method="POST" action="/cars">
        <label>Company:</label>
        <input name="make" required />

        <label>Brand:</label>
        <input name="model" required />

        <label>Year:</label>
        <input type="number" name="year" required />

        <label>Price:</label>
        <input type="number" name="price" required />

        <label>Description:</label>
        <textarea name="description"></textarea>

        <label>Image URL:</label>
        <input name="imageUrl" />

        <label>Phone Number:</label>
        <input name="phone" required />

        <button type="submit">Post Car</button>
      </form>

      </div>
    </Layout>
  );
}

module.exports = New;
