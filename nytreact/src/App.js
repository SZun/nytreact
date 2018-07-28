import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import asyncComponent from './asyncComponents/asyncComponent';

const asyncHome = asyncComponent(() => {
  return import('./containers/Home/Home');
});

const asyncSaved = asyncComponent(() => {
  return import('./containers/Saved/Saved');
});
const asyncResults = asyncComponent(() => {
  return import('./containers/Results/Results');
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route exact path="/" component={asyncHome} />
            <Route exact path="/saved" component={asyncSaved} />
            <Route exact path="/results" component={asyncResults} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
