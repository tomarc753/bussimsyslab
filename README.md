# Leaflet Bus Reroute Simulation Syslab

Stop locations are generated from `dist/sensitivestoproutedata.xlsx` and saved
to `dist/stops.json`. Run `node dist\extract.js` after changing the workbook.
To run the project from vscode, start a server from the project root with
`python -m http.server 8080`, then open `http://localhost:8080` in a browser.