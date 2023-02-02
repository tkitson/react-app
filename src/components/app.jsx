import React, { Component } from "react";
// import './App.css';
import '../application.scss';
import SearchBar from './searchbar';
import Gif from './gif';

class App extends Component {
  render(){
    return(
      <div>
        <div className="left-scene">
        <SearchBar />
          <div className="selected-gif">
            <Gif id="xThtasfb2tLKWrfIuk/giphy.gif?cid=ecf05e479e36028ccb20e64fd535cc59c8d1f8b92fc3790d"/>
          </div>
        </div>
        <div className="right-scene"></div>
      </div>
    );
  }
}

export default App;
