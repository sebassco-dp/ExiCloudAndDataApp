// Dependencies
import React, { Component } from 'react';
//import axios from 'axios'

// Dependencias Material
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// Assets
import './css/Content.css';
import ImageAvatars from './ImageAvatars.js'
import ImgMediaCard from './ImgMediaCard.js'

const initialState = {
  name: "",
  team: []
}

class Content extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      enemy: '',
      team: []
    }

    this.setEnemy = this.setEnemy.bind(this);
  }

  changeEnemy = e => {
    this.setState({ enemy: e.target.value })
  };

  setEnemy() {
    alert('Hi');
  };

  addAlly = e => {
    alert('Hi');
  };

  changeTeam = e => {
    this.setState({ name: e.target.value })
  };

  render() {
    return (
      <div className="Site-content">
        <Grid container justify="space-around" alignItems="center">
          <Grid item xs={10}>
            <TextField
              fullWidth
              id="enemy"
              label="Choose your enemy"
              value={this.state.enemy}
              onChange={this.changeEnemy}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" className="button" fullWidth onClick={this.setEnemy}>
              Select Enemy
            </Button>
          </Grid> 
          <Grid item xs={10}>
            <TextField
              fullWidth
              id="team-member"
              label="Add your team members..."
              value={this.state.name}
              onChange={this.changeTeam}
              margin="normal"
            />
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" className="button" fullWidth>
              Add Member
            </Button>
          </Grid>
        </Grid>

        <ImageAvatars
          imgSrc="http://i.annihil.us/u/prod/marvel/i/mg/6/40/5274137e3e2cd.jpg"
          name="Thanos"
        />

        <ImgMediaCard
          imgSrc="http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg"
          title="Iron Man"
          description="Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man."
        />
      </div>
    );
  }
}

export default Content;
