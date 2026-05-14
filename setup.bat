@echo off
cd /d C:\Users\anesd\Desktop\webprishtina\BORNE
echo Current directory: %CD%
echo.
echo Checking Node.js...
node --version
npm --version
echo.
echo Installing dependencies...
call npm install --legacy-peer-deps
echo.
echo Copying images...
if not exist "public\img" mkdir public\img
xcopy /E /Y /I img\* public\img\
echo.
echo Running build...
call npm run build
echo.
echo SETUP COMPLETE - Exit code: %ERRORLEVEL%
