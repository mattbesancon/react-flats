import React, { Component } from 'react';

class Marker extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    return (
      <div className="marker" />
    );
  }
}

export default Marker;
