#echo OFF
cd nginx
start nginx.exe
cd ..\backend
set CURRENTDIR=%CD%
start "" "C:\Program Files\nodejs\node.exe" "%CURRENTDIR%\app.js"
cd ..
