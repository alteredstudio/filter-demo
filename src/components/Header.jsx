import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <ul className="list-inline list-unstyled">
    <li className="margin-right-2"><Link to="/">Home</Link></li>
    <li className="margin-right-2"><Link to="/about">About</Link></li>
    <li className="margin-right-2"><Link to="/search">Search</Link></li>
    <li className="margin-right-2"><Link to="/filter">Filter</Link></li>
    <li className="margin-right-2"><Link to="/topics">Topics</Link></li>
  </ul>
);

export default Header;
