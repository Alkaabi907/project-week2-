const React = require('react');
const Navbar = require('./Nav');

function Layout({ title = 'CarSnap', children, customCss, isLoggedIn = false }) {
  return (
    <html>
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/css/style.css" />
        {customCss && <link rel="stylesheet" href={customCss} />}
      </head>
      <body>

        <Navbar isLoggedIn={isLoggedIn} />

        <main>{children}</main>
     
      </body>
    </html>
  );
}

module.exports = Layout;
