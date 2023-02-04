import React, { Component } from "react";

class Gif extends Component {
  handleClick = () => {
    this.props.selectFunction(this.props.id)
  }

  render() {
    const src = `https://media4.giphy.com/media/${this.props.id}/giphy.webp`;
    return (
      <img className="gif" alt="" src={src} onClick={this.handleClick}/>
    );
  }
}

export default Gif;
