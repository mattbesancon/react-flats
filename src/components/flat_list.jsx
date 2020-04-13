import React from 'react';
import Flat from './flat';

import flats from '../../data/flats';

const FlatList = () => {
  return (
    <div className="flat-list">
      {flats.map(flat => <Flat id={flat.id} />)}
    </div>
  );
};

export default FlatList;
