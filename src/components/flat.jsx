import React, { Component } from 'react';

import flats from '././data/flats.js';

const Flat = (props) => {
  const background = `background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.flats[props.id].imageUrl};);">`;
  return (
    <div className="card" style={background}>
      <div className="card-category"> {this.props.flats.price} EUR</div>
      <div className="card-description">
        <h2>{this.props.flats.price}</h2>
      </div>
      <a className="card-link" href="#"></a>
    </div>
  );
};

export default Flat;
