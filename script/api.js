//use free rapidapi.com jquery and api key to call realtor.com api to get property information based on MLS ID
const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://realtor.p.rapidapi.com/properties/v2/list-by-mls?mls_id=%3CREQUIRED%3E&offset=0&limit=10",
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "f217e49726msh083ea4d114998fcp1ba18cjsn9a4d6fb8a28c",
        "x-rapidapi-host": "realtor.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});



//



//call Here.com api to get map image based on coordinates
// Initialize the platform object:
var platform = new H.service.Platform({
    'apikey': 'iC1FZj0wPBqDpCD6nBY5lWN5w2Kc0XCKy9IJdwSqjNY'
});

// Obtain the default map types from the platform object
var maptypes = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
    document.getElementById('mapContainer'),
    maptypes.vector.normal.map,
    {
        zoom: 16,
        center: { lng: 13.4, lat: 52.51 }
    });

// Define a variable holding SVG mark-up that defines an icon image:
var svgMarkup = '<svg width="24" height="24" ' +
    'xmlns="http://www.w3.org/2000/svg">' +
    '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
    'height="22" /><text x="12" y="18" font-size="12pt" ' +
    'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    'fill="white">D</text></svg>';

// Create an icon, an object holding the latitude and longitude, and a marker:
var icon = new H.map.Icon(svgMarkup),
    coords = { lat: 52.51, lng: 13.4 },
    marker = new H.map.Marker(coords, { icon: icon });

// Add the marker to the map and center the map at the location of the marker:
map.addObject(marker);
map.setCenter(coords);