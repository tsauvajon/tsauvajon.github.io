
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var avenueSaintLazareMontpellier = new google.maps.LatLng(43.6240474, 3.8862023, 11);
    var macclesfield = new google.maps.LatLng(53.2611378, -2.1627397, 13);
    var paris = new google.maps.LatLng(48.8588377, 2.2770203, 12);
    var sydney = new google.maps.LatLng(-33.8883323, 151.1931201);

    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 4,

        // The latitude and longitude to center the map (always required)
        center: sydney,

        // How you would like to style the map. 
        scrollwheel: false,
        styles: [{ "featureType": "administrative.land_parcel", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape.man_made", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "simplified" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "hue": "#f49935" }] }, { "featureType": "road.highway", "elementType": "labels", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "hue": "#fad959" }] }, { "featureType": "road.arterial", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.local", "elementType": "labels", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "hue": "#a1cdfc" }, { "saturation": 30 }, { "lightness": 49 }] }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    var geocoder = new google.maps.Geocoder();

    var addresses = [
        // '31 bis avenue Saint-Lazare 34000 MONTPELLIER',
        // 'Macclesfield, UK',
        '63 Cleveland St, Darlington, NSW 2008'
    ];

    for (var x = 0; x < addresses.length; x++) {
        geocoder.geocode({ address: addresses[x] }, function (results) {
            // Manual set if the query doesn't return the correct results
            var mtp = {
                lat: 43.6240474,
                lng: 3.8862023
            }
            var mcsf = {
                lat: 53.2611378,
                lng: -2.1627397
            }
            var syd = {
                lat: -33.8883323,
                lng: 151.1931201,
            }
            var p = syd

            console.log('google maps search results:')
            console.log(results[0])

            if (results[0] && results[0].geometry) {
                p = results[0].geometry.location
            }
            // var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: p,
                map: map,
                icon: 'images/moiloc.png'
            });

        });
    }
}

google.maps.event.addDomListener(window, 'load', init);
