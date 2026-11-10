# Leaflet Bus Reroute Simulation Syslab

## Run the project from vscode

python -m http.server 8081 --bind 127.0.0.1

Can also try
py -m http.server 8081 --bind 127.0.0.1.
or
python -m http.server 9000 --bind 127.0.0.1
open http://127.0.0.1:8081.
or http://127.0.0.1:9000/ if did http.server 9000
Press ctrl c in the terminal to stop the server.

The map uses the generated stop data in dist/stops.json. If you change the
source spreadsheet, regenerate that file from the project root with:

powershell
node dist\extract.js
