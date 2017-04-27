import React from 'react';

// We can destructure objects all the way down, sometimes this is a little too
// much for my taste. This is an example, but I'd probably use location.pathname
const NoMatch = ({ location: { pathname } }) => (
  <div>
    <h3>Sorry, we could not find: <code>{pathname}</code></h3>
  </div>
);

export default NoMatch;

