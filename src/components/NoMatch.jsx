import React from 'react';

const NoMatch = ({ location }) => (
  <div>
    <h3>Sorry, we could not find: <code>{location.pathname}</code></h3>
  </div>
);

export default NoMatch;

