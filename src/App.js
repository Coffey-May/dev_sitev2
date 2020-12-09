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
import Dashboard from "./Dashboard"
import UserName from "./UserName"
import WeatherComponent from "./components/WeatherComponent"


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

            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/username" component={UserName} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/weather" component={WeatherComponent} />

          </Switch>
        </div>
      </AuthProvider>
    </Router >
  );
}

export default App;
