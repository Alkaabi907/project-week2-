const React = require('react');
const Layout = require('../layout');

function New() {
  return (
    <Layout title="Sell a Car">
      <h1>Sell Your Car</h1>
      <form method="POST" action="/cars">
        <input name="title" placeholder="Car Title" required /><br />
        <input name="image" placeholder="Image URL" required /><br />
        <input name="price" placeholder="Price (BHD)" required /><br />
        <textarea name="description" placeholder="Description" required></textarea><br />
        <button>Post Car</button>
      </form>
    </Layout>
  );
}

module.exports = New;
