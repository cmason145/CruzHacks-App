
//--------------Google Maps API------------------//

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 36.982275426096066, lng: -122.05921228702711},
    zoom: 14,
    mapId: '28128416ff9651c8',
  });
}

//-------------Index File, Call The Police Button-----------//

function callPoliceFunction() {
  let doubleCheck = prompt("Do you want to contact the Campus Police? Yes/No");
  doubleCheck = doubleCheck.toLowerCase();
  doubleCheck = doubleCheck.trim(" ");
  if( doubleCheck === "yes"){
alert( "This is their number (831)-459-2231")
  } else{
    alert("Be safe. Goodbye 👋🏽");
  }
}

let callNow = document.querySelector("#call-campus-police");
callNow.addEventListener('click',callPoliceFunction);




