import React, { Component } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";

import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";
import CurrentUserContext from "./CurrentUserContext";


class PrivateRoute extends Component {
  static contextType = CurrentUserContext;
  render() {
    // this.context will be the entire currentUser object or null
    if (!this.context || !this.context.username) {
      return <Redirect to="/login" />;
    }

    return (
      <Route
        exact={this.props.exact}
        path={this.props.path}
        render={this.props.render}
      />
    );
  }
}


class Routes extends Component {
  static contextType = CurrentUserContext;

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/login" render={props => <Login {...props} getCurrentUser={this.props.getCurrentUser} />} />
          <Route exact path="/" render={() => <Home />} />
          <PrivateRoute path="/companies/:handle" render={props => <Company {...props} getCurrentUser={this.props.getCurrentUser} />} />
          <PrivateRoute path="/companies" render={props => <Companies {...props} />} />
          <PrivateRoute path="/jobs" render={props => <Jobs {...props} />} />
          <PrivateRoute path="/profile" render={props => <Profile {...props} />} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}
export default Routes;