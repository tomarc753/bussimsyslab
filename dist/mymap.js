var mapOptions = {
    center: [38.81992, -77.16801],
    zoom: 16,
    maxZoom: 24,
    tap: false
};

var map = L.map('map', mapOptions);

var Esri_WorldImagery = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }
);

Esri_WorldImagery.addTo(map);

fetch('dist/stops.json')
    .then(function (response) {
        if (!response.ok) {
            throw new Error(`Could not load dist/stops.json (${response.status})`);
        }
        return response.json();
    })
    .then(function (stops) {
        var markerLocations = [];

        stops.forEach(function (stop) {
            var marker = L.marker([stop.latitude, stop.longitude]).addTo(map);
            var popupContent = document.createElement('b');
            popupContent.textContent = `${stop.stopName} (${stop.studentCounts} students)`;
            marker.bindPopup(popupContent);
            markerLocations.push([stop.latitude, stop.longitude]);
        });

        if (markerLocations.length > 0) {
            map.fitBounds(markerLocations, { maxZoom: 16 });
        }
    })
    .catch(function (error) {
        console.error('Unable to create stop markers:', error);
    });
