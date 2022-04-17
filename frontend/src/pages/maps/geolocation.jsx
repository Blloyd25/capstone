



let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

export default initMap
// const API_endpoint = `http://127.0.0.1:8000/api/helping_hands/jobs`;
// const API_key =`AIzaSyCv0KJMM-Tw84hmlRCMYpPygtz01vSIX8o`;

// function Location(){
//     const [latitude, setLatitude] = useState('');
//     const [longitude, setLongitude] = useState('');
//     React.useEffect(() => {
//         navigator.geolocation.getCurrentPosition((position) => {
//             setLatitude(position.cords.latitude);
//             setLongitude(position.cords.longitude)
//         })

//         let finalAPIEndPoint = `${API_endpoint}lat=${latitude}& lon=${longitude}$exclude=hourly,daily$appid=${API_key}`

//         axios.get(finalAPIEndPoint)
//         .then((response) => {
//             console.log(response.data)
//         })
//     }, [])
// }


// export default Location