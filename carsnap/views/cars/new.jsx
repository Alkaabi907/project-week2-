const React = require('react');
const Layout = require('../layout');

function New() {
  return (
    <Layout title="Sell a Car">
      <h1>Sell Your Car</h1>
      <form method="POST" action="/cars">
        {/* Car title */}
        <input name="title" placeholder="Car Title" required /><br />

        {/* Image URL - fixed name */}
        <input name="imageUrl" placeholder="Image URL" required /><br />

        {/* Price */}
        <input name="price" placeholder="Price (BHD)" required /><br />

        {/* Description */}
        <textarea name="description" placeholder="Description" required></textarea><br />

        {/* Submit button */}
        <button>Post Car</button>
      </form>
    </Layout>
  );
}

module.exports = New;
