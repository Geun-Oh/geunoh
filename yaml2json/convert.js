const yaml = require('js-yaml');
const fs = require('fs');
const util = require('util');

try {
    const doc = yaml.load(fs.readFileSync('./main.yaml', 'utf-8'));
    console.log(util.inspect(doc, { showHidden: false, depth: null }));
} catch (e) {
    console.log(e);
}