import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from './components/App';
import { Clients } from '../lib/collection';
import { BrowserRouter } from 'react-router-dom';
Meteor.startup(() => {
  render(<App />, document.getElementById('rootApp'));
});
