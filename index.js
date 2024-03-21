
// GOOGLE MAPS CONFIGURATION
document.querySelector('.fa-street-view').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + pos.lat + ',' + pos.lng + '&key=AIzaSyAs3nHRK_HuWB2anTYog_6vRiAWyx5HbTg')
                .then(response => response.json())
                .then(data => {
                    var address = data.results[0].formatted_address;
                    document.querySelector('#location-input').value = address;
                })
                .catch(error => console.error(error));
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

// AUTO COMPLETE
var input = document.getElementById('location-input');
var autocomplete = new google.maps.places.Autocomplete(input);


// HANDLE NEXT BUTTON WHEN CLICKED
// Get the elements
var locationInput = document.querySelector('#location-input');
var phoneInput = document.querySelector('input[type="tel"]');
var locButton = document.querySelector('.loc-btn');
var telButton = document.querySelector('.phone-btn');

// Initially hide the phone input
phoneInput.style.display = 'none';
telButton.style.display = 'none';

// When the location input is focused, hide the phone input
locationInput.addEventListener('focus', function() {
    phoneInput.style.display = 'none';
    // telButton.style.display = 'none';
});

// When the "Next" button is clicked, hide the location input and show the phone input
locButton.addEventListener('click', function() {
    locButton.style.display = 'none';
    locationInput.style.display = 'none';
    phoneInput.style.display = 'block';
    telButton.style.display = 'block';
    phoneInput.focus();
});


// VALIDATE PHONE NUMBER
var phoneInput = document.querySelector('input[type="tel"]');
var telButton = document.querySelector('.phone-btn');


telButton.addEventListener('click', function() {
    var phoneNumber = phoneInput.value;
    var qatarPhoneRegex = /^(00974|\+974)?[0-9]{8}$/;

    if (!qatarPhoneRegex.test(phoneNumber)) {
        alert('Please enter a valid Qatari phone number.');
    }
});
