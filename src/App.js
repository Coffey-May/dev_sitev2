import React from 'react';
import './App.css';
// import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Home path="/" exact component={Home} style={{ width: '80vw' }} />
          {/* <Route path="/projects" component={Projects} /> */}
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
