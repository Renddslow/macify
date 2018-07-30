#!/usr/bin/env node
const { spawnSync } = require('child_process');

const macPath = [
  'Volumes',
  'omaha'
];

const args = process.argv.slice(2);
const winPath = args[0] && args[0].split('\\');

if (winPath[0] === 'J:') {
  macPath.push(...[
    'DataFile',
    ...winPath.splice(1)
  ]);
}

const macPathString = macPath.join('/').split(' ').join('\\ ');
const t = spawnSync('open', [
  `/${macPathString}`,
  '-a',
  '/Applications/Microsoft\\ Word.app/'
], { shell: true });