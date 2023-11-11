// let map;

// function initMap() {
//   // Check if Geolocation is supported
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const userLocation = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude
//         };

//         map = new google.maps.Map(document.getElementById('map'), {
//           center: userLocation,
//           zoom: 15
//         });

//         // Add a marker at the user's location
//         const marker = new google.maps.Marker({
//           position: userLocation,
//           map: map,
//           title: 'Your Location'
//         });

//         // Reverse geocode the user's location
//         const geocoder = new google.maps.Geocoder();
//         geocoder.geocode({ location: userLocation }, (results, status) => {
//           if (status === 'OK') {
//             if (results[0]) {
//               // Display the formatted address on the map
//               const infowindow = new google.maps.InfoWindow({
//                 content: results[0].formatted_address
//               });
//               infowindow.open(map, marker);
//             } else {
//               console.error('No results found');
//             }
//           } else {
//             console.error(`Geocoder failed due to: ${status}`);
//           }
//         });
//       },
//       (error) => {
//         console.error('Error getting user location:', error.message);
//       }
//     );
//   } else {
//     console.error('Geolocation is not supported by this browser.');
//   }
// }



// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
// let map, infoWindow;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 6,
//   });
//   infoWindow = new google.maps.InfoWindow();

//   const locationButton = document.createElement("button");

//   locationButton.textContent = "Pan to Current Location";
//   locationButton.classList.add("custom-map-control-button");
//   map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
//   locationButton.addEventListener("click", () => {
//     // Try HTML5 geolocation.
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };

//           infoWindow.setPosition(pos);
//           infoWindow.setContent("Location found.");
//           infoWindow.open(map);
//           map.setCenter(pos);
//         },
//         () => {
//           handleLocationError(true, infoWindow, map.getCenter());
//         },
//       );
//     } else {
//       // Browser doesn't support Geolocation
//       handleLocationError(false, infoWindow, map.getCenter());
//     }
//   });
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(
//     browserHasGeolocation
//       ? "Error: The Geolocation service failed."
//       : "Error: Your browser doesn't support geolocation.",
//   );
//   infoWindow.open(map);
// }

// window.initMap = initMap;



let map;

function initMap() {
  // Check if Geolocation is supported
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        map = new google.maps.Map(document.getElementById('map'), {
          center: userLocation,
          zoom: 15
        });

        // Add a marker at the user's location
        const marker = new google.maps.Marker({
          position: userLocation,
          map: map,
          title: 'You Are Here!'
        });

        // Reverse geocode the user's location
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: userLocation }, (results, status) => {
          if (status === 'OK') {
            if (results[0]) {
              // Display the formatted address on the map
              const infowindow = new google.maps.InfoWindow({
                content: results[0].formatted_address
              });
              infowindow.open(map, marker);
            } else {
              console.error('No results found');
            }
          } else {
            console.error(`Geocoder failed due to: ${status}`);
          }
        });
      },
      (error) => {
        console.error('Error getting user location:', error.message);
      }
    );
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
}