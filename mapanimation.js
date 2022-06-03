// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uYWx5c2Fvd2VuIiwiYSI6ImNsM3g3YjVvdjB3azAza256aHJjZXI3bnkifQ.g1XIWpEw10KTvE7RNIm_Kg';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  //Mapbox Navigation Night style.
  style: 'mapbox://styles/mapbox/navigation-night-v1',
  center: [-71.104081, 42.365554],
  zoom: 14,
});

var marker = new mapboxgl.Marker()
  .setLngLat([-71.093729, 42.359244])
  .addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // The function marker.setLngLat() updates the marker coordinates every 1000ms..
  setTimeout(() =>{
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
}


if (typeof module !== 'undefined') {
  module.exports = { move };
}