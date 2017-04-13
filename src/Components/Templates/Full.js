import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Header from '../Header'
import Topics from '../Topics'
import Home from '../Home'
import About from '../About'
import NotFound from '../NotFound'

const App = () => (
  <Router>
    <div>
      <Header />

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route component={NotFound}/>
    </div>
  </Router>
)

export default App
