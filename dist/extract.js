const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

// reading xlsx file and extracting data from it
const workbook = XLSX.readFile(path.join(__dirname, 'sensitivestoproutedata.xlsx'));
const depotworkbook = XLSX.readFile(path.join(__dirname, 'schoolbusdepotstj.xlsx'));
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const depotworksheet = depotworkbook.Sheets[depotworkbook.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(worksheet);
const depotrows = XLSX.utils.sheet_to_json(depotworksheet);
const stopsByName = new Map(); // storing unique stops/depots by stop name to avoid duplicates
const depotsByName = new Map();
const routeByName = new Map(); // storing unique routes by route name to avoid duplicates

for (const row of rows) { // going through each row of the xlsx file and extracting the required data
    const stopName = String(row.stop_name || '').trim();
    const latitude = Number(row.latitude);
    const longitude = Number(row.longitude);
    const studentCounts = Number(row.student_counts);
    // check validity of variables before adding
    if (!stopName || !Number.isFinite(latitude) || !Number.isFinite(longitude) || !Number.isFinite(studentCounts)) {
        continue;
    }
    // merging stops of same name by adding their student counts together
    if (stopsByName.has(stopName)) {
        stopsByName.get(stopName).studentCounts += studentCounts;
    } else {
        stopsByName.set(stopName, { stopName, latitude, longitude, studentCounts });
    }
}

for (const depotrow of depotrows) { // same process for depots, but without student counts
    const depotName = String(depotrow.StopName || '').trim();
    const latitude = Number(depotrow.Latitude);
    const longitude = Number(depotrow.Longitude);

    if (!depotName || !Number.isFinite(latitude) || !Number.isFinite(longitude)) {
        continue;
    }
    if (!depotsByName.has(depotName)) {
        depotsByName.set(depotName, { depotName, latitude, longitude });
    }
}

for (const row of rows) { // extracting route data from the xlsx file
    const routeName = String(row.trip_name || '').trim();
    const stopNumb = Number(row.stop_n);
    const stopName = String(row.stop_name || '').trim();
    const latitude = Number(row.latitude);
    const longitude = Number(row.longitude);
    const studentCounts = Number(row.student_counts);
    if (!routeName || !Number.isFinite(stopNumb) || !stopName || !Number.isFinite(latitude) || !Number.isFinite(longitude) || !Number.isFinite(studentCounts)) {
        continue;
    }
    if (!routeByName.has(routeName)) {
        routeByName.set(routeName, []);
    }
    routeByName.get(routeName).push({ stopNumb, stopName, latitude, longitude, studentCounts });
}

// converting unique stop and depots to arrays, writing them to json files
const stops = Array.from(stopsByName.values());
const depots = Array.from(depotsByName.values());
const routes = Array.from(routeByName.entries()).map(([routeName, stops]) => ({ routeName, stops }));
const outputPath = path.join(__dirname, 'stops.json');
fs.writeFileSync(outputPath, JSON.stringify(stops, null, 2)); 
console.log(`Wrote ${stops.length} unique stops to ${outputPath}`); // logging numb of unique stops for testing
const depotOutputPath = path.join(__dirname, 'depots.json');
fs.writeFileSync(depotOutputPath, JSON.stringify(depots, null, 2));
console.log(`Wrote ${depots.length} unique depots to ${depotOutputPath}`);
const routeOutputPath = path.join(__dirname, 'routes.json');
console.log(`Wrote ${routes.length} unique routes to ${routeOutputPath}`);
fs.writeFileSync(routeOutputPath, JSON.stringify(routes, null, 2));