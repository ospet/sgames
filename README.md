# S-Games

## Pre-requisites (Windows)
* Install NodeJS on your machine, in the default location (C:\Program Files\nodejs)
* Install Nginx in the root sgames folder.
* Rename the Nginx folder to remove version number (so folder is just *nginx*)

## Configure Nginx
* Have location / point to sgames/frontend
* Have location ~ /apigdocscsv/(.*)$    configured with reverse proxy:
proxy_pass http://127.0.0.1:8083/gdocs/$1;
This is to target backend on port 8083

## Running servers
Go to sgames root folder and open command prompt.
Run the *run.cmd* command
This will launch both web server and backend


