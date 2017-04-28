import React from 'react';
import { Route } from 'react-router-dom';

const setRoutes = routes => (
  routes.map(({ path, ...rest }) => (
    <Route key={path} path={path} {...rest} />
  ))
);

export default setRoutes;
