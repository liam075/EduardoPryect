const { spawn } = require('child_process');

const scriptPath = 'C:\\path\\to\\your\\script.ps1';

const powershellProcess = spawn('powershell.exe', ['-ExecutionPolicy', 'Bypass', '-File', scriptPath]);

powershellProcess.stdout.on('data', (data:any) => {
  console.log(`PowerShell stdout: ${data}`);
});

powershellProcess.stderr.on('data', (data:any) => {
  console.error(`PowerShell stderr: ${data}`);
});

powershellProcess.on('close', (code:any) => {
  console.log(`PowerShell process exited with code ${code}`);
});