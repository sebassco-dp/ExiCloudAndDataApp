// Dependencies
import React, { Component } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';

// Components
import Header from './Global/Header.js';
import Content from './Global/Content.js';
import Footer from './Global/Footer.js';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Container fixed>
          <Header />
          <Content />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
