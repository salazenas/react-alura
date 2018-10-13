import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import $ from 'jquery';
import FormularioAutor from './components/formularioAutor';
import Menu from './components/menu';

class App extends Component {

  render() {
    return (
      <div id="layout">
        <div id="menu">
          <Menu/>
        </div>
        <div id="main">
          <FormularioAutor />
        </div>
      </div>
    );
  }
}

export default App;