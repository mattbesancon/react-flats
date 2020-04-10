import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map(flat => <Flat id={flat.id} />)}
    </div>
  );
};

export default FlatList;
