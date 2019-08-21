// Dependencies
import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

// Assets
import './css/Footer.css';

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
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </div>
    );
  }
}

export default Footer;
