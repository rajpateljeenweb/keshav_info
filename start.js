import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('\x1b[36m%s\x1b[0m', '══════════════════════════════════════════════════════════════════');
console.log('\x1b[36m%s\x1b[0m', '  KESHAV INFO &bull; Industrial PEB & Heavy Steel Software Suite');
console.log('\x1b[36m%s\x1b[0m', '  Backend: http://localhost:5055 | Frontend: http://localhost:5175');
console.log('\x1b[36m%s\x1b[0m', '══════════════════════════════════════════════════════════════════');

// 1. Launch Node Express Backend
const server = spawn('node', ['server/index.js'], {
  stdio: 'inherit',
  shell: true,
  cwd: __dirname
});

// 2. Launch Vite React Client
const client = spawn('npm', ['run', 'dev', '--prefix', 'client'], {
  stdio: 'inherit',
  shell: true,
  cwd: __dirname
});

process.on('SIGINT', () => {
  server.kill();
  client.kill();
  process.exit();
});
