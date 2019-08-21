// Dependencies
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

// Assets
import './css/Footer.css';
import exiLogo from './img/exiLogo.jpeg';
import ibmLogo from './img/ibmLogo.png';
import ibmCloudLogo from './img/ibmCloudLogo.jpg';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.marvel.com/">
        Marvel
      </Link>{' '}
      {new Date().getFullYear()}
      {'. Characters, logos and photos belongs to Marvel Entertainment Group, Inc.'}
    </Typography>
  );
}

class Footer extends Component {

  render() {
    return (
      <div className="Footer">
        <Container>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item sm={3} xs={6}>
              <img src={exiLogo} alt="Exisoft Logo" height="50px" />
            </Grid>
            <Grid item sm={3} xs={6}>
              <img src={ibmLogo} alt="IBM Logo" height="50px" />
            </Grid>
            <Grid item sm={3} xs={6}>
              <img src={ibmCloudLogo} alt="IBM Cloud Logo" height="50px" />
            </Grid>
            <Grid item sm={3} xs={6}>
              <Copyright />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Footer;
