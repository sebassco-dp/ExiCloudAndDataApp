// Dependencies
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

// Assets
import Logo from './Logo.js';
import './css/Header.css';

class Header extends Component {

  render() {

    return (
      <div className="Header">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={2}>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Logo />
          </Grid>
          <Grid item xs={12} sm={4}>
            <h2>Make you own Dream Team</h2>
          </Grid>
          <Grid item xs={12} sm={2} className={'itemGrid'}>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Header;
