"use strict";
const { spawn } = require('child_process');
const scriptPath = 'C:\\path\\to\\your\\script.ps1';
const powershellProcess = spawn('powershell.exe', ['-ExecutionPolicy', 'Bypass', '-File', scriptPath]);
powershellProcess.stdout.on('data', (data) => {
    console.log(`PowerShell stdout: ${data}`);
});
powershellProcess.stderr.on('data', (data) => {
    console.error(`PowerShell stderr: ${data}`);
});
powershellProcess.on('close', (code) => {
    console.log(`PowerShell process exited with code ${code}`);
});
