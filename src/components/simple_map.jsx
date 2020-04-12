import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';
import flats from '../../data/flats';

const Marker = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBSuzI2Me9VRX0GvaJk5aSFo2GYN6GZ76s' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={flats[this.props.id].lat}
            lng={flats[this.props.id].lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
