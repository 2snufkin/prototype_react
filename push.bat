@echo off

git pull
git add .

:: Create the commit message with date, time, and PC hostname
set "commit_message=Changes made on %date% at %time% 
git commit -m "%commit_message%"

git push origin
