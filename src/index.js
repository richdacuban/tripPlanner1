const mapboxgl = require('mapbox-gl');
const { iconURLs, buildMarker } = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoicmljaGRhY3ViYW4iLCJhIjoiY2ptaTcwMGlwMDF2dTNwcXM3NmU5OHExbyJ9.MkTjR1bFGy6z3yCm_mwhjg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10',
});

// console.log('Just to see if this werxxxx');
// let coordinates = [-74.009, 40.705];

// new mapboxgl.Marker(markerDomEl).setLngLat(coordinates).addTo(map);

const marker = buildMarker('medicine', [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
// console.log(marker);
marker.addTo(map);
