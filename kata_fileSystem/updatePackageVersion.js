'use strict';

const fileName = './package.json';
const file = require(fileName);
const fs = require('fs');

file.version = file.version + 1;

fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
    if (err) return console.log(err);
    console.log(JSON.stringify(file, null, 2));
    console.log('writing to ' + fileName);
});