import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapStyle from '../../styles/MapStyle.js';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 0.0,
      lng: 0.0
    },
    zoom: 0
  };

  render() {
    return (
      <div>
        <div>
          <h4>No matter wherever you are in the world,</h4>
          <h4> you can sign-up now to partner up with us</h4>
        </div>
        <div className='Map'>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyA09LmGVjqwFo8bnGNqlJRGAqmeyiynpUo'
            }}
            options={{ styles: MapStyle }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          ></GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Map;
