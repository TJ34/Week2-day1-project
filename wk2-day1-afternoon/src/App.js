import React, { Component } from 'react';
import Beer from './components/Beer/Beer';
import Band from './components/Band/Band';
import Songs from './components/Songs/Songs';
import BeerMap from './components/Beer/BeerMap';
import BandMap from './components/Band/BandMap';
import SongMap from './components/Songs/SongMap';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      beers: [],
      bands: [],
      songs: [],
    }
  }

  handleAddBeer = (beer) => {
    this.setState({beers: [...this.state.beers, beer]})
  }

  handleAddBand = (band) => {
    this.setState({bands: [...this.state.bands, band]})
  }

  handleAddSong = (song) => {
    this.setState({songs: [...this.state.songs, song]})
  }

  deleteBeer = (elem) => {
    this.setState({beers: this.state.beers.filter(e => e !== elem)});
  }

  deleteBand = (elem) => {
    this.setState({bands: this.state.bands.filter(e => e !== elem)});
  }

  deleteSong = (elem) => {
    this.setState({songs: this.state.songs.filter(e => e !== elem)});
  }

  render() {
    return (
      <div>
        <div className="MyShittyApp">
          <h1 className="header">My Shitty App</h1>
          <Beer addBeer={this.handleAddBeer}/>
          <BeerMap beers={this.state.beers} deleteBeer={this.deleteBeer}/>
          <Band addband={this.handleAddBand}/>
          <BandMap bands={this.state.bands} deleteBand={this.deleteBand}/>
          <Songs addsong={this.handleAddSong}/>
          <SongMap songs={this.state.songs} deleteSong={this.deleteSong}/>
        </div>
      </div>
    );
  }
}

export default App;
