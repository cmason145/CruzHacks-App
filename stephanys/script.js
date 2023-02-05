
//--------------Google Maps API------------------//

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 36.982275426096066, lng: -122.05921228702711},
    zoom: 14,
    mapId: '28128416ff9651c8',
  });
}