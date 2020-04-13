import React from 'react';

import flats from '../../data/flats';

const Flat = (props) => {
  const background = `background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${flats[props].imageUrl};);">`;
  return (
    <div className="card" style={background}>
      <div className="card-category">
        {flats[props].price}
        EUR
      </div>
      <div className="card-description">
        <h2>{flats[props].name}</h2>
      </div>
      <a className="card-link" href="#"></a>
    </div>
  );
};

export default Flat;
