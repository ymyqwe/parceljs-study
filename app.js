// app.js
import React, { Component } from 'react';
import { render } from 'react-dom';
import Main from './main';
import './styles.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
