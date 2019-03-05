
var google;

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    // var avenueSaintLazareMontpellier = new google.maps.LatLng(43.6240474, 3.8862023, 11);
    var macclesfield = new google.maps.LatLng(53.2611378, -2.1627397, 13);
    
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 7,

        // The latitude and longitude to center the map (always required)
        center: macclesfield,

        // How you would like to style the map. 
        scrollwheel: false,
        styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
    };

    

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    
    var addresses = [
        '31 bis avenue Saint-Lazare 34000 MONTPELLIER',
        'Macclesfield, UK',
    ];

    for (var x = 0; x < addresses.length; x++) {
        $.getJSON('//maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false&key=AIzaSyC8mmcdcEPVy7wcCum_GeKAgiL4GhCTII8', null, function (data) {
            // Manual set if the query doesn't return the correct results
            var mtp = {
                lat: 43.6240474,
                lng: 3.8862023
            }
            var mcsf = {
                lat: 53.2611378,
                lng: -2.1627397
            }
            var p = mcsf

            console.log('google maps search results:')
            console.log(data.results[0])

            if (data.results[0] && data.results[0].geometry) {
                p = data.results[0].geometry.location
            }
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            new google.maps.Marker({
                position: latlng,
                map: map
                // ,
                // icon: 'images/loc.png'
            });

        });
    }
    
}
google.maps.event.addDomListener(window, 'load', init);
