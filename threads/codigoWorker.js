const { parentPort } = require('worker_threads');
const ordenar = require('./ordenar');

function random(min, max) {
    return Math.random() * (max - min) + min;
}

const start = Date.now();

let elGranArray = Array(5000000)
    .fill()
    .map(() => random(2, 10000));
    parentPort.postMessage({
        val: ordenar(elGranArray).primerValor,
        timeDiff: Date.now() - start,
    });