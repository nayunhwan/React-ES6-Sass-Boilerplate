// React Common Modules
import React, { Component } from "react";
// React Router
// import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { Route, Switch, withRouter } from "react-router-dom";
// Material UI Provider for React

// Own Modules
import { DefaultPage, DefaultReduxPage } from "./Pages/";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={DefaultPage} />
        <Route exact path="/redux" component={DefaultReduxPage} />
        <Switch>
          <Route exact path="/depth1/params" component={DefaultPage} />
          <Route exact path="/depth1" component={DefaultPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
