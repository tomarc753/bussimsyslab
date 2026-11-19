var mapOptions = {
    center: [38.81992, -77.16801],
    zoom: 16,
    maxZoom: 24,
    tap: false
};

var map = L.map('map', mapOptions);

var esriWorldImagery = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }
);

esriWorldImagery.addTo(map);
// above code was from template, adding map


var busImage = 'dist/BusYel.png';
var busIcon = L.icon({
    iconUrl: busImage,
    iconSize: [64, 48], 
    iconAnchor: [32, 24] // set center of bus pic
});
//  
var depotIcon = L.icon({
    iconUrl: 'dist/images/depot-icon.png',
    shadowUrl: 'dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [18, 59],
    shadowSize: [41, 41],
    shadowAnchor: [13, 41],
    popupAnchor: [0, -52]

});
var busLatitudeOffset = 0.00058; // avoid overlap
var busLongitudeOffset = 0.00106;
var mapLocations = []; // array to store all locations for fitting map bounds
// fit map to all locations on map
function fitMapToLocations() {
    if (mapLocations.length > 0) {
        map.fitBounds(mapLocations, { maxZoom: 8 });
    }
}
// fetch stops and depots from json files, mark on map
fetch('dist/stops.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (stops) {
        stops.forEach(function (stop) {
            var marker = L.marker([stop.latitude, stop.longitude]).addTo(map);
            marker.bindPopup(`${stop.stopName} (${stop.studentCounts} students)`);
            mapLocations.push([stop.latitude, stop.longitude]);

            var busLocation = [ 
                stop.latitude + busLatitudeOffset / 2,
                stop.longitude + busLongitudeOffset / 2
            ];
            var bus = L.marker(busLocation, { icon: busIcon }).addTo(map);
            bus.bindPopup(`${stop.studentCounts} students on bus`); 
            mapLocations.push(busLocation); 
        });

        fitMapToLocations();
    })
    .catch(function (error) {
        console.error('Unable to create stop markers:', error);
    });

fetch('dist/depots.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (depots) {
        depots.forEach(function (depot) {
            var depotMarker = L.marker([depot.latitude, depot.longitude], { icon: depotIcon }).addTo(map);
            depotMarker.bindPopup(`${depot.depotName} - Bus Depot`);
            mapLocations.push([depot.latitude, depot.longitude]);
        });
        fitMapToLocations();
    })
    .catch(function (error) {
        console.error('Unable to create depot markers:', error);
    });
