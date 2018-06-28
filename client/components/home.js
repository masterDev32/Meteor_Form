import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter, Link, Router, HashRouter } from 'react-router-dom';
class Acceuil extends React.Component {
  constructor(props) {
    super(props);
    console.log('Acceuil');
  }
  render() {
    return (
      <div id="showcase">
        <div>
          <div>
            <h5>Bienvenue chez Projet_Test_JM</h5>
            <h1>Construit pour le future.</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              fugit deserunt quos provident aliquam inventore. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit.
            </p>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Acceuil;
