import React, { Suspense, PureComponent } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import RouterInterceptor from './RouterInterceptor/index'
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { token } = this.props;
    return (
      <RouterInterceptor />
    );
  }
}

export default App;