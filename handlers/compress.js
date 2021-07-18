const chalk = require('chalk');
const archiver = require('archiver');
const fs = require('fs');
const path = require('path');
const moveFile = require('../lib/moveFile');

class Compress {

    async compressZip(source, out) {
        const archive = archiver('zip', { zlib: { level: 4 }});
        const stream = fs.createWriteStream(out);

        return new Promise((res, rej) => {
            archive
                .directory(source, false)
                .on('error', (err) => {
                    console.log(chalk.red(`Something went wrong while trying to compress your selection.`));
                    rej(err);
                })
                .pipe(stream);

            stream.on('close', () => {
                console.log(chalk.green(`Finished zipping your selection`));
            });
            moveFile(out, path.join(out, '../../'));

            archive.finalize();
        })
    }
}

module.exports = new Compress();