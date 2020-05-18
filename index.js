'use strict';

const fs = require('fs');
const path = require('path');
const run = require('./export');

const DEF_FORMAT = 'png';

function makeOutputFileName(src, ext) { 
    const basename = path.basename(src);
    return `${basename}.${ext}`
}

function makeImgTag(src, origin) { 
    return `<img src="${src}" class="drawio" alt="${origin}" />`;
}

module.exports = {
    blocks: {
        drawIo: {
            process: (block) => {
                console.log(block);
                const origin = block.kwargs.src;
                const format = block.kwargs.format || DEF_FORMAT;
                const outpath = path.join('./assets/images/drawio/', makeOutputFileName(origin, format));
                run({
                    file: origin,
                    format: format,
                    path: outpath,
                });
                return makeImgTag(outpath, path.basename(origin));
            }
        }
    }
};