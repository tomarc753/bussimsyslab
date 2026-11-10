# Leaflet Bus Reroute Simulation Syslab

## Run the project from vscode

python -m http.server 8081 --bind 127.0.0.1

If `python` is not recognized on Windows, try
`py -m http.server 8081 --bind 127.0.0.1`.
open `http://127.0.0.1:8081`.
Press `Ctrl+C` in the terminal to stop the server.

The map uses the generated stop data in `dist/stops.json`. If you change the
source spreadsheet, regenerate that file from the project root with:

powershell
node dist\extract.js
