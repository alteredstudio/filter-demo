import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import routes from '../routes';
import Header from './Header';
import NoMatch from './NoMatch';
import setRoutes from '../utils/setRoutes';

const App = () => (
  <Router>
    <div className="container-fluid">
      <Header />
      <br />
      <br />
      <Switch>
        { setRoutes(routes) }
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
