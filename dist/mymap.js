var mapOptions = {
 center: [38.81992, -77.16801], //set center Lat/Long of your area of interest
 zoom: 16, //set initial zoom level
 maxZoom : 24,  //set max zoom level
 tap : false //fix popup bug on Safari
 }

//Creates map object according to map options
var map = new L.map('map', mapOptions);

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
			attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'});

var bcLibrary= L.marker( [38.818476078499145, -77.16867159476809] ).addTo(map);
bcLibrary.bindPopup("<b>TJHSST</b>");
Esri_WorldImagery.addTo(map);