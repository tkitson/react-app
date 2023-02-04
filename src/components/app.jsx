import React, { Component } from "react";
// import './App.css';
import '../application.scss';
import SearchBar from './searchbar';
import Gif from './gif';
import GifList from './gif_list';
import giphy from 'giphy-api';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "xT5LMzIK1AdZJ4cYW4"
  }
  this.search();
  this.select();
}

  search = (query) => {
    giphy('HSnLUQatxgQsT8f4CkkJvHpF3235MIaQ').search({
      q: query,
      rating: 'g',
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
  });
  }

  select = (gif) => {
    this.setState({
      selectedGifId: gif
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
        <SearchBar searchFunction={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectFunction={this.select}/>
        </div>
      </div>
    );
  };
}

export default App;
