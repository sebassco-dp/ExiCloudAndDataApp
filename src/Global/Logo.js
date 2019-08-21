// Dependencies
import React, { Component } from 'react';


// Assets
import logo from './img/MarvelLogo.png';
import './css/Header.css';

class Logo extends Component {
  render() {

    return (
      <div className="Logo">
        <img src={logo} alt="logo" width="200" />
      </div>
    );
  }
}

export default Logo;
