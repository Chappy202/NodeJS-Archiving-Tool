const chalk = require('chalk');
const Path = require('path');

// Lib
const moveFile = require('../../lib/moveFile');

// Handlers
const Compress = require('../../handlers/compress');

class Compression {
    initial(path, name = 'foo.zip') {
        Compress.compressZip(path, path + `/${name}.zip`).catch((err) => {
            console.log(chalk.red(`Something went wrong during your compression.`, err));
        });
        const out = path + `/${name}.zip`;
        moveFile(out, Path.join(out, `../../`, `${name}.zip`));
    }
}

module.exports = new Compression();