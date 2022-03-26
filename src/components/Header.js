import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div>
      <header>
        <div className="header_logo">
          <h3><Link to="/">Math Magicians</Link></h3>
        </div>
        <div className="header_links">
          <Link to="/">Home</Link>
          <Link to="/Calculator">Calculator</Link>
          <Link to="/Quote">Quote</Link>
        </div>
      </header>
      <section className="header_main">
        <Outlet />
      </section>
    </div>
  );
}

export default Header;
