const yaml = require('js-yaml');
const fs = require('fs');
// const util = require('util');
// console.log(util.inspect(dst, { showHidden: false, depth: null }));
// import yaml from 'js-yaml';
// import fs from 'fs';

try {
    const dst = JSON.stringify(yaml.load(fs.readFileSync('./main.yaml', 'utf-8')));
    console.log(dst);
    fs.writeFileSync('dst.json', dst);
} catch (e) {
    console.log(e);
}