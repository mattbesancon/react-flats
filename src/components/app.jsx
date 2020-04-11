import React, { Component } from 'react';


import SimpleMap from './simple_map';
import Marker from './marker';
import Flat from './flat';
import FlatList from './flat_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: []
    };
  }

  render() {
    return (
      <div className="flat-list">
        <FlatList />
      </div>
      <div className="map-container">
        <SimpleMap />
        <div className="marker"></div>
          <Marker />
        </div>
      </div>
    );
  }
}

export default App;