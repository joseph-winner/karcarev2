document.querySelector('.service-map').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            window.open('https://www.google.com/maps/@?api=AIzaSyAs3nHRK_HuWB2anTYog_6vRiAWyx5HbTg&map_action=map&center=' + pos.lat + ',' + pos.lng + '&zoom=14&basemap=satellite');
        }, function() {
            handleLocationError(true);
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false);
    }
});

function handleLocationError(browserHasGeolocation) {
    alert(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
}