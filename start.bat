@echo off
echo Starting MERN E-commerce Application...

echo Installing backend dependencies...
cd backend
call npm install --silent

echo Starting backend server...
start "Backend Server" cmd /k "node server.js"

echo Installing frontend dependencies...
cd ../frontend
call npm install --silent

echo Starting frontend server...
start "Frontend Server" cmd /k "npm start"

echo Both servers are starting...
echo Backend: http://localhost:5001
echo Frontend: http://localhost:3000
pause