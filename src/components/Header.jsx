import React from 'react';

import routes from '../routes';
import setLinks from '../utils/setLinks';

const Header = () => (
  <ul className="list-inline list-unstyled">
    { setLinks(routes) }
  </ul>
);

export default Header;
