import React, { Component } from 'react';


import SimpleMap from './simple_map';
import Marker from './marker';
import FlatList from './flat_list';

class App extends Component {

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList />
        </div>
        <div className="map-container">
          <SimpleMap />
          <div className="marker">
            <Marker />
          </div>
        </div>
      </div>
    );
  }

};

export default App;
