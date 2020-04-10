import React, { Component } from 'react';

import flats from '././data/flats.js';

const Flat = (props) => {
    const background = `background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.flats.imageurl};);">`;
    return (
        <div class="card" style={background}></div>
        <div class="card-category"> {props.flats.price} EUR</div>
        <div class="card-description">
            <h2>{props.flats.price}</h2>
        </div>
        <a class="card-link" href="#"></a>
        </div>
    );
};

export default Flat;
