import React, { Suspense, lazy } from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Views/Home/Home';
import Nav from './components/Nav/Nav';
// import Contact from './components/Views/Contact/Contact';
import { AuthProvider } from "./AuthContext";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import PrivateRoute from "./components/Auth/PrivateRoute";
import ForgotPassword from "./components/Auth/ForgotPassword";
import UpdateProfile from "./components/Auth/UpdateProfile";
import Dashboard from "./components/Auth/Dashboard";
import UserName from "./components/Auth/UserName";
import { Recipe } from './components/Recipe/Recipe';
import { Bp } from './components/Bp/Bp';

const WeatherComponent = lazy(() => import("./components/Weather/WeatherComponent"));
// const Projects = lazy(() => import('./components/Views/Projects/Projects'));
const ToDoApp = lazy(() => import("./components/ToDo/TodoApp"));
function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Suspense fallback={<div>Loading...</div>}>
            <Nav />
            <Switch>
              <Home path="/" exact component={Home} style={{ width: '80vw' }} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/username" component={UserName} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/weather" component={WeatherComponent} />
              <Route path="/todo" component={ToDoApp} />
              <Route path="/recipe" component={Recipe} />
              <Route path="/bp" component={Bp} />

            </Switch>
          </Suspense>
        </div>
      </AuthProvider>
    </Router >
  );
}

export default App;
