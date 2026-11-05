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

var tjHSST= L.marker( [38.818476078499145, -77.16867159476809] ).addTo(map);
var southCounty = L.marker( [38.717428, -77.240728] ).addTo(map);
var islandCreek = L.marker( [38.74519, -77.1685] ).addTo(map);
var plumCenter = L.marker( [38.8058, -77.1817] ).addTo(map);
var sandburgMiddle = L.marker( [38.7288, -77.0615] ).addTo(map);
var belvoirLibrary = L.marker( [38.69216, -77.13744] ).addTo(map);
var vernonWood = L.marker( [38.74233, -77.09996] ).addTo(map);
var forestDale = L.marker( [38.7765, -77.17012] ).addTo(map);
var roseHillElem = L.marker( [38.7823, -77.11681] ).addTo(map);
var canterbury = L.marker( [38.82016, -77.2497] ).addTo(map);
var gallowThors = L.marker( [38.8524, -77.2023] ).addTo(map);
var georgeMason = L.marker( [38.8274251, -77.1862695] ).addTo(map);
var cardinalForestElem = L.marker( [38.7919055, -77.2401175] ).addTo(map);
var kingsParkLib = L.marker( [38.80722, -77.2565] ).addTo(map);
var powellElem = L.marker( [38.84613, -77.407831] ).addTo(map);
var cubRun = L.marker( [38.86514, -77.45842] ).addTo(map);
var greenBriar = L.marker( [38.87648, -77.40538] ).addTo(map);
var fredCrabtree = L.marker( [38.9129732, -77.3607763] ).addTo(map);
var leesElem = L.marker( [38.8904107, -77.4111217] ).addTo(map);
var oakHill = L.marker( [38.9131, -77.4088] ).addTo(map);
var waplesMill = L.marker( [38.877, -77.3445] ).addTo(map);
var oakView = L.marker( [38.81896, -77.30989] ).addTo(map);
var mosaicElem = L.marker( [38.8631, -77.2644] ).addTo(map);
var allenSt = L.marker([38.8683, -77.2091]).addTo(map);
var westLawnElem = L.marker([38.862637, -77.185604]).addTo(map);
var wilsonLibrary = L.marker([38.85127, -77.14299]).addTo(map);
var freedomHill = L.marker([38.91071, -77.22968]).addTo(map);
var westChester = L.marker([38.9038, -77.2341]).addTo(map);
var cunningHam = L.marker([38.8913, -77.2483]).addTo(map);
var louiseArcher = L.marker([38.89915, -77.277189]).addTo(map);
var strattonWoodsPark = L.marker([38.943254, -77.388397]).addTo(map);
var southLakesHigh = L.marker([38.9324, -77.3395]).addTo(map);
var lakeAnneElem = L.marker([38.96533, -77.34666]).addTo(map);
var springHillElem = L.marker([38.9391379, -77.2290397]).addTo(map);
var dollyMadisonLib = L.marker([38.9396, -77.1845]).addTo(map);
var hayCock = L.marker([38.90414, -77.17343]).addTo(map);
var pimmitHills = L.marker([38.91659, -77.20496]).addTo(map);
var forestVille = L.marker([38.99364, -77.32838]).addTo(map);
var mcLeanHigh = L.marker([38.9233, -77.1853]).addTo(map);
var mcNairUpperMid = L.marker([38.9472231, -77.4034527]).addTo(map);

mcNairUpperMid.bindPopup("<b>McNair Upper Mid</b>");
mcLeanHigh.bindPopup("<b>McLean High</b>");
forestVille.bindPopup("<b>Forest Ville</b>");
pimmitHills.bindPopup("<b>Pimmit Hills</b>");
hayCock.bindPopup("<b>Hay Cock</b>");
dollyMadisonLib.bindPopup("<b>Dolly Madison Lib</b>");
springHillElem.bindPopup("<b>Spring Hill Elem</b>");
lakeAnneElem.bindPopup("<b>Lake Anne Elem</b>");
southLakesHigh.bindPopup("<b>South Lakes High</b>");
strattonWoodsPark.bindPopup("<b>Stratton Woods Park</b>");
cunningHam.bindPopup("<b>Cunningham</b>");
louiseArcher.bindPopup("<b>Louise Archer</b>");
westChester.bindPopup("<b>West Chester</b>");
freedomHill.bindPopup("<b>Freedom Hill</b>");
wilsonLibrary.bindPopup("<b>Wilson Library</b>");
westLawnElem.bindPopup("<b>West Lawn Elem</b>");
allenSt.bindPopup("<b>Allen St</b>");
oakView.bindPopup("<b>Oak View</b>");
mosaicElem.bindPopup("<b>Mosaic Elem</b>");
waplesMill.bindPopup("<b>Waples Mill</b>");
powellElem.bindPopup("<b>Powell Elem</b>");
fredCrabtree.bindPopup("<b>Fred Crabtree</b>");
leesElem.bindPopup("<b>Lees Elem</b>");
oakHill.bindPopup("<b>Oak Hill</b>");
greenBriar.bindPopup("<b>Green Briar</b>");
cubRun.bindPopup("<b>Cub Run</b>");
cardinalForestElem.bindPopup("<b>Cardinal Forest Elem</b>");
kingsParkLib.bindPopup("<b>Kings Park Lib</b>");
georgeMason.bindPopup("<b>George Mason</b>");
gallowThors.bindPopup("<b>Gallow Thors</b>");
canterbury.bindPopup("<b>Canterbury</b>");
roseHillElem.bindPopup("<b>Rose Hill Elem</b>");
forestDale.bindPopup("<b>Forest Dale</b>");
vernonWood.bindPopup("<b>Vernon Wood</b>");
belvoirLibrary.bindPopup("<b>Belvoir Library</b>");
sandburgMiddle.bindPopup("<b>Sandburg Middle</b>");
plumCenter.bindPopup("<b>Plum Center</b>");
islandCreek.bindPopup("<b>Island Creek</b>");
southCounty.bindPopup("<b>South County</b>");
tjHSST.bindPopup("<b>TJHSST</b>");
Esri_WorldImagery.addTo(map);