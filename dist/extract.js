const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const workbook = XLSX.readFile(path.join(__dirname, 'sensitivestoproutedata.xlsx'));
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(worksheet);
const stopsByLocation = new Map();

for (const row of rows) {
    const stopName = String(row.stop_name || '').trim();
    const latitude = Number(row.latitude);
    const longitude = Number(row.longitude);
    const studentcounts = Number(row.student_counts);

    if (!stopName || !Number.isFinite(latitude) || !Number.isFinite(longitude) || !Number.isFinite(studentcounts)) {
        continue;
    }

    const key = `${stopName}\0${latitude}\0${longitude}\0${studentcounts}`;
    if (!stopsByLocation.has(key)) {
        stopsByLocation.set(key, { stopName, latitude, longitude, studentcounts });
    }
}

const stops = Array.from(stopsByLocation.values());
const outputPath = path.join(__dirname, 'stops.json');
fs.writeFileSync(outputPath, JSON.stringify(stops, null, 2));
console.log(`Wrote ${stops.length} unique stops to ${outputPath}`);
