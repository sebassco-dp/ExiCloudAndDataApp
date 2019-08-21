// Dependencies
import React, { Component } from 'react';
import axios from 'axios'

// Dependencias Material
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// Assets
import './css/Content.css';
import ImageAvatars from './ImageAvatars.js'
import ImgMediaCard from './ImgMediaCard.js'

class Content extends Component {

  constructor(props) {
    super(props)

    this.state = {
      serviceURL: 'Set your endpoint URL',
      apikey: 'Set your API Key',
      enemyName: '',
      teamMember: '',
      enemy: {
        name: 'Mr Pool',
        thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99.jpg'
      },
      team: []
    }
  };

  setEnemy = e => {
    var enemyToFind = document.getElementById('enemy').value;
    if (enemyToFind === "") {
      alert('Please select an enemy');
    } else {
      axios.get(this.state.serviceURL + enemyToFind, { 'headers': { 'X-IBM-Client-Id': this.state.apikey } })
        .then(response => {
          console.log(response);
          if (response.data.results.length > 0) {
            var selectedEnemy = { name: '', thumbnail: '' };
            selectedEnemy.name = response.data.results[0].name;
            selectedEnemy.thumbnail = response.data.results[0].thumbnail.path + '.' + response.data.results[0].thumbnail.extension;
            this.setState({
              enemy: selectedEnemy
            });
          } else {
            alert("We can't find your enemy, please choose another one");
          }
        })
        .catch(error => {
          alert("An error has occurred please wait a few minutes and try again");
        });
    }
  };

  addAlly = e => {
    var allyToAdd = document.getElementById('team-member').value;
    if (allyToAdd === "") {
      alert('Please select an ally');
    } else {
      axios.get(this.state.serviceURL + allyToAdd, { 'headers': { 'X-IBM-Client-Id': this.state.apikey } })
        .then(response => {
          console.log(response);
          if (response.data.results.length > 0) {
            var newTeamMember = { name: '', thumbnail: '', description: '' };
            newTeamMember.name = response.data.results[0].name;
            newTeamMember.thumbnail = response.data.results[0].thumbnail.path + '.' + response.data.results[0].thumbnail.extension;
            newTeamMember.description = response.data.results[0].description;
            this.setState({
              team: this.state.team.concat(newTeamMember)
            })
          } else {
            alert("We can't find your ally, please choose another one");
          }
        })
        .catch(error => {
          alert("An error has occurred please wait a few minutes and try again");
        });
    }
  };


  //Textbox Changes
  changeServiceURL = e => {
    this.setState({ serviceURL: e.target.value })
  }

  changeApikey = e => {
    this.setState({ apikey: e.target.value })
  }

  changeEnemy = e => {
    this.setState({ enemyName: e.target.value })
  };

  changeTeam = e => {
    this.setState({ teamMember: e.target.value })
  };

  render() {
    return (
      <div className="Site-content">
        <Grid container justify="space-around" alignItems="center" padding-bottom="150px">


          <Grid container justify="space-around" alignItems="center" spacing={2}>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="ServiceURL"
                label="Set your service URL"
                value={this.state.serviceURL}
                onChange={this.changeServiceURL}
                margin="normal"
              />
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="ApiKey"
                label="Set your api key"
                value={this.state.apikey}
                onChange={this.changeApikey}
                margin="normal"
              />
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <TextField
                fullWidth
                id="enemy"
                label="Choose your enemy"
                value={this.state.enemyName}
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
                label="Add your team members"
                value={this.state.teamMember}
                onChange={this.changeTeam}
                margin="normal"
              />
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" className="button" fullWidth onClick={this.addAlly}>
                Add Member
            </Button>
            </Grid>
          </Grid>

          <ImageAvatars
            imgSrc={this.state.enemy.thumbnail}
            name={this.state.enemy.name}
          />
          <h2>Your team is:</h2>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            {this.state.team.map((item) =>
              <Grid item xs={3}>
                <ImgMediaCard
                  imgSrc={item.thumbnail}
                  title={item.name}
                  description={item.description}
                />
              </Grid>
            )}
          </Grid>

        </Grid>
      </div>
    );
  }
}

export default Content;
