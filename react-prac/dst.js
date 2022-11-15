// const yaml = require('js-yaml');
// const fs = require('fs');
// const util = require('util');
// console.log(util.inspect(dst, { showHidden: false, depth: null }));
import yaml from 'js-yaml';
import fs from 'fs';
import { exec } from 'child_process';

const render = (json) => {
    try {
        const dst = JSON.stringify(yaml.load(fs.readFileSync(json, 'utf-8')));
        console.log(dst);
        fs.writeFileSync('dst.json', dst);
        // exec('npm run dev', (err) => console.log(err))
    } catch (e) {
        console.log(e);
    }
    exec(`cp ./dst.json ../react-prac/dst.json && cd ../react-prac && npm run dev`);
    console.log('Vite app is running...');
}
// exec('npm run dev')
// try {
//     const dst = JSON.stringify(yaml.load(fs.readFileSync('./yaml/main.yaml', 'utf-8')));
//     console.log(dst);
//     fs.writeFileSync('dst.json', dst);
// } catch (e) {
//     console.log(e);
// }

export default render;