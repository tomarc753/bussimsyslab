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

var busimg = 'dist/BusYel.png';
var a = 0.00058
var b = 0.00106
var busBounds = [[38.81992, -77.16801], [38.82050, -77.16695]]

fetch('dist/stops.json')
    .then(function (response) {
        if (!response.ok) {
            throw new Error(`Could not load dist/stops.json (${response.status})`);
        }
        return response.json();
    })
    .then(function (stops) {
        var markerLocations = [];
        var busLocations = [];

        stops.forEach(function (stop) {
            var marker = L.marker([stop.latitude, stop.longitude]).addTo(map);
            busBounds = [[stop.latitude, stop.longitude], [stop.latitude + a, stop.longitude + b]];
            var popupContent = document.createElement('b');
            popupContent.textContent = `${stop.stopName} (${stop.studentCounts} students)`;
            marker.bindPopup(popupContent);
            markerLocations.push([stop.latitude, stop.longitude]);
            var bus = L.imageOverlay(busimg, busBounds, { interactive: true }).addTo(map);
            var busPopup = document.createElement('b');
            busPopup.textContent = `${stop.studentCounts} students on bus`;
            bus.bindPopup(busPopup);
            busLocations.push([stop.latitude + a, stop.longitude + b]);
        });

        if (markerLocations.length > 0) {
            map.fitBounds(markerLocations, { maxZoom: 16 });
        }
        if (busLocations.length > 0) {
            map.fitBounds(busLocations, { maxZoom: 16 });
        }
    })
    .catch(function (error) {
        console.error('Unable to create stop markers:', error);
    });
