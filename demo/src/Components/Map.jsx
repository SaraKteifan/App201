import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Polyline,
  Marker
} from "react-google-maps";

class Map extends React.Component {
  path = [
    { lat: 18.558908, lng: -68.389916 },

  ];

  velocity = 5;
  initialDate = new Date();

  getDistance = () => {
    // seconds between when the component loaded and now
    const differentInTime = (new Date() - this.initialDate) / 1000; // pass to seconds
    return differentInTime * this.velocity; // d = v*t -- thanks Newton!
  };

  componentDidMount = () => {
    this.interval = window.setInterval(this.consoleDistance, 1000);
  };

  componentWillUnmount = () => {
    window.clearInterval(this.interval);
  };

  consoleDistance = () => {
    console.log(this.getDistance());
  };

  componentWillMount = () => {
    this.path = this.path.map((coordinates, i, array) => {
      if (i === 0) {
        return { ...coordinates, distance: 0 }; // it begins here!
      }
      const { lat: lat1, lng: lng1 } = coordinates;
      const latLong1 = new window.google.maps.LatLng(lat1, lng1);

      const { lat: lat2, lng: lng2 } = array[0];
      const latLong2 = new window.google.maps.LatLng(lat2, lng2);

      // in meters:
      const distance = window.google.maps.geometry.spherical.computeDistanceBetween(
        latLong1,
        latLong2
      );

      return { ...coordinates, distance };
    });

    console.log(this.path);
  };

  render = () => {
    return (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: 18.559008, lng: -68.388881 }}
      >
        <Polyline path={this.path} options={{ strokeColor: "#FF0000 " }} />
        <Marker position={this.path[this.path.length - 1]} />
      </GoogleMap>
    );
  };
}

const MapComponent = withScriptjs(withGoogleMap(Map));

export default () => (
  <MapComponent
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBLAK8u4gdFq7YkMt2Q5Yy-iQJoNIXXnng&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px`, width: "500px" }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
);