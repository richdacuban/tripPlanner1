const mapbox = require('mapbox-gl');

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png',
  medicine:
    'https://cdn3.iconfinder.com/data/icons/map-markers-2-1/512/drugs-512.png',
};

const buildMarker = (type, coords) => {
  const markerDomEl = document.createElement('div'); // Create a new, detached DIV
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = `url(${iconURLs[type]})`;
  console.log(iconURLs[type]);
  // 'url(https://cdn3.iconfinder.com/data/icons/map-markers-2-1/512/drugs-512.png)';

  const newMarker = new mapbox.Marker(markerDomEl).setLngLat(coords);
  return newMarker;
};

module.exports = { iconURLs, buildMarker };