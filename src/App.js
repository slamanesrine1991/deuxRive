import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./comopnents/login";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./comopnents/frontOffice/Home";
import Contact from "./comopnents/frontOffice/Contact";
import ListProjects from "./comopnents/frontOffice/List";
import Cent from "./comopnents/frontOffice/Cent";
import Forums from './comopnents/frontOffice/Forum'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import PrivateRoute from "./utils/privateRoute";
import Dashboard from "./comopnents/dashboard";
import { connect } from "react-redux";
/** */
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  console.log(decoded, "expoooooooo");
  // Check for expired token

  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "/";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={ListProjects} />
        <Route exact path="/cent" component={Cent} />
        <Route exact path="/forums" component={Forums} />
        <Route exact path="/login" render={() => <Login />} />
        <Switch>
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
