import React from 'react';
import { Link } from 'react-router-dom';

// This only works because className="margin-right-2" is acceptable for both
// cases, otherwise we would only want to use this helper with set <Link />
// styles
const setLinks = linkConfigArray => (
  linkConfigArray.map(({ path, name }) => (
    <li key={path} className="margin-right-2">
      <Link to={path}>{name}</Link>
    </li>
  ))
);

export default setLinks;
