const chalk = require('chalk');
const Path = require('path')

// Handlers
const Compress = require('../../handlers/compress');

class Compression {
    initial(path, name = 'foo.zip') {
        Compress.compressZip(path, path + `/${name}.zip`).catch((err) => {
            console.log(chalk.red(`Something went wrong during your compression.`, err));
        });
    }
}

module.exports = new Compression();