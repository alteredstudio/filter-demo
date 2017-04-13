import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Header from './Header'
import Topics from './Topics'
import Home from './Home'
import About from './About'
import SearchContainer from './SearchContainer'
import FilterContainer from './FilterContainer'
import NoMatch from './NoMatch'

const App = () => (
  <Router>
    <div className="container-fluid">

      <Header />

      <br />
      <br />

      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/search" component={SearchContainer}/>
        <Route path="/filter" component={FilterContainer}/>
        <Route path="/topics" component={Topics}/>
        <Route component={NoMatch}/>
      </Switch>

    </div>
  </Router>
)

export default App


//
// import React, { Component } from 'react';
// //import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// export default App;
