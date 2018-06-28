import React, { Component, Fragment } from 'react';

import {
  BrowserRouter,
  Link,
  Router,
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

import Home from './home';
import Form from './form';
import NavBar from './navbar';
import Enregistrement from './liste';
import { Accounts } from 'meteor/accounts-base';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <div>
            <NavBar />
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/form" component={Form} />
          <Route path="/enregistrements" component={Enregistrement} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
