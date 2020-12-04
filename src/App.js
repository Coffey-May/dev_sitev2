import React from 'react';
import './App.css';
// import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import Contact from './Contact';
import Projects from './Projects';
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./Login"
import Signup from "./Signup"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Nav />
          <Switch>
            <Home path="/" exact component={Home} style={{ width: '80vw' }} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />

            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />

          </Switch>
        </div>
      </AuthProvider>
    </Router >
  );
}

export default App;
