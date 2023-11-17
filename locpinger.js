const x = document.getElementById("coords")

if(window.DeviceOrientationEvent){
    window.addEventListener("deviceorientation", orient, false);
  }else{
    x.innerHTML = ("DeviceOrientationEvent is not supported");
  }

function orient (event) {
    x.innerHTML = "Magnetometer: " + event.alpha + ", " + event.beta + ", " + event.gamma
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}