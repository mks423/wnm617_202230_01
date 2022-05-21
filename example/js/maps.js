
const makeMap = async (target, center={ lat: 37.751917, lng: -122.447489 }) => {
  await checkData(()=>window.google);

  let map_el = $(target);

  if(!map_el.data("map")) map_el.data({
     "map": new google.maps.Map(map_el[0], {
        center,
        zoom: 12,
        disableDefaultUI: true,
        styles: mapstyles,
     }),
     "infoWindow": new google.maps.InfoWindow({content:''}),
  });

  return map_el;
}


const makeMarkers = (map_el, map_locs=[]) => {
  let {map,markers} = map_el.data();

  if(markers) markers.forEach(m=>m.setMap(null));

  markers = [];

  map_locs.forEach(l=>{
     let m = new google.maps.Marker({
        position: l,
        map,
        icon: {
           url: l.icon,
           scaledSize: {
              width:40,
              height:40,
           }
        }
     });
     markers.push(m);
  });

  map_el.data({markers});
  setTimeout(()=>{ setMapBounds(map_el,map_locs); }, 150);
}



const setMapBounds = (map_el,map_locs) => {
  let {map} = map_el.data();
  let zoom = 14;

  if(map_locs.length === 1) {
     map.setCenter(map_locs[0]);
     map.setZoom(zoom);
  } else if(map_locs.length === 0) {
     if(window.location.protocol !== "https:") return;
     else {
        navigator.geolocation.getCurrentPosition(p=>{
           let pos = {
              lat:p.coords.latitude,
              lng:p.coords.longitude,
           };
           map.setCenter(pos);
           map.setZoom(zoom);
        },
        (...args)=>{
           console.log(args)
        },
        {
           enableHighAccuracy: false,
           timeout: 5000,
           maximumAge: 0,
        })
     }
  } else {
     let bounds = new google.maps.LatLngBounds(null);
     map_locs.forEach(l => {
        bounds.extend(l);
     });
     map.fitBounds(bounds);
  }
}




const mapstyles = [
 {
   "elementType": "geometry",
   "stylers": [
     {
       "color": "#1d2c4d"
     }
   ]
 },
 {
   "elementType": "labels.text.fill",
   "stylers": [
     {
       "color": "#8ec3b9"
     }
   ]
 },
 {
   "elementType": "labels.text.stroke",
   "stylers": [
     {
       "color": "#1a3646"
     }
   ]
 },
 {
   "featureType": "administrative.country",
   "elementType": "geometry.stroke",
   "stylers": [
     {
       "color": "#4b6878"
     }
   ]
 },
 {
   "featureType": "administrative.land_parcel",
   "elementType": "labels.text.fill",
   "stylers": [
     {
       "color": "#64779e"
     }
   ]
 },
 {
   "featureType": "administrative.province",
   "elementType": "geometry.stroke",
   "stylers": [
     {
       "color": "#4b6878"
     }
   ]
 },
 {
   "featureType": "landscape.man_made",
   "elementType": "geometry.stroke",
   "stylers": [
     {
       "color": "#334e87"
     }
   ]
 },
 {
   "featureType": "landscape.natural",
   "elementType": "geometry",
   "stylers": [
     {
       "color": "#023e58"
     }
   ]
 },
 {
   "featureType": "poi",
   "elementType": "geometry",
   "stylers": [
     {
       "color": "#283d6a"
     }
   ]
 },
 {
   "featureType": "poi",
   "elementType": "labels.text.fill",
   "stylers": [
     {
       "color": "#6f9ba5"
     }
   ]
 },
 {
   "featureType": "poi",
   "elementType": "labels.text.stroke",
   "stylers": [
     {
       "color": "#1d2c4d"
     }
   ]
 },
 {
   "featureType": "poi.park",
   "elementType": "geometry.fill",
   "stylers": [
     {
       "color": "#023e58"
     }
   ]
 },
 {
   "featureType": "poi.park",
   "elementType": "labels.text.fill",
   "stylers": [
     {
       "color": "#3C7680"
     }
   ]
 },
 {
   "featureType": "road",
   "elementType": "geometry",
   "stylers": [
     {
       "color": "#304a7d"
     }
   ]
 },
 {
   "featureType": "road",
   "elementType": "labels.text.fill",
   "stylers": [
     {
       "color": "#98a5be"
     }
   ]
 },
 {
   "featureType": "road",
   "elementType": "labels.text.stroke",
   "stylers": [
     {
       "color": "#1d2c4d"
     }
   ]
 },
 {
   "featureType": "road.highway",
   "elementType": "geometry",
   "stylers": [
     {
       "color": "#2c6675"
     }
   ]
 },
 {
   "featureType": "road.highway",
   "elementType": "geometry.stroke",
   "stylers": [
     {
       "color": "#255763"
     }
   ]
 },
 {
   "featureType": "road.highway",
   "elementType": "labels.text.fill",
   "stylers": [
     {
       "color": "#b0d5ce"
     }
   ]
 },
 {
   "featureType": "road.highway",
   "elementType": "labels.text.stroke",
   "stylers": [
     {
       "color": "#023e58"
     }
   ]
 },
 {
   "featureType": "transit",
   "elementType": "labels.text.fill",
   "stylers": [
     {
       "color": "#98a5be"
     }
   ]
 },
 {
   "featureType": "transit",
   "elementType": "labels.text.stroke",
   "stylers": [
     {
       "color": "#1d2c4d"
     }
   ]
 },
 {
   "featureType": "transit.line",
   "elementType": "geometry.fill",
   "stylers": [
     {
       "color": "#283d6a"
     }
   ]
 },
 {
   "featureType": "transit.station",
   "elementType": "geometry",
   "stylers": [
     {
       "color": "#3a4762"
     }
   ]
 },
 {
   "featureType": "water",
   "elementType": "geometry",
   "stylers": [
     {
       "color": "#0e1626"
     }
   ]
 },
 {
   "featureType": "water",
   "elementType": "labels.text.fill",
   "stylers": [
     {
       "color": "#4e6d70"
     }
   ]
 }
]