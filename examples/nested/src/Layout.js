import React from 'react';
import { Link } from '../../../lib';

export const Layout = ( Child ) => {
  return () => {
    return (
      <div>
        <nav>
          <Link to="/" activeClassName="active">Home</Link>
          <Link to="/about" activeClassName="active">About</Link>
          <Link to="/users/10" activeClassName="active">user 10</Link>
        </nav>
        <Child />
      </div>
    );
  };
};

export default Layout;