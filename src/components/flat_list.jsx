import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
    </div>
  );
};

export default FlatList;
