import React, { Component } from "react";

class Gif extends Component {
  render() {
    const src = `https://media1.giphy.com/media/${this.props.id}&rid=giphy.gif&ct=g`;
    return (
      <img className="gif" alt="" src={src}/>
    );
  }
}

export default Gif;
