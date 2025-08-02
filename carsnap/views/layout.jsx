function Layout({ title = 'CarSnap', children, customCss, hideAuthLinks = false }) {
  return (
    <html>
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/css/style.css" />
        {customCss && <link rel="stylesheet" href={customCss} />}
      </head>
      <body>
        <nav>
          <a href="/cars">Home</a> | 
          <a href="/cars/new">Sell a Car</a> | 
          {!hideAuthLinks && (
            <>
              <a href="/auth/login">Login</a> | 
              <a href="/auth/signup">Signup</a> | 
            </>
          )}
          <form method="POST" action="/auth/logout" style={{ display: 'inline' }}>
            <button type="submit">Logout</button>
          </form>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}

export default Layout;
