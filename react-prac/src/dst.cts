const yaml = require('js-yaml');
const fs = require('fs');
// const util = require('util');

const dst = JSON.stringify(yaml.load(fs.readFileSync('react-prac/src/main.yaml', 'utf-8')));
fs.writeFileSync('dst.json', dst);
// console.log(util.inspect(dst, { showHidden: false, depth: null }));

export {}
