// Archive Libraries
const archiver = require('archiver');

// NodeJS
const chalk = require('chalk');
const fs = require('fs');

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

            archive.finalize();
        })
    }
}

module.exports = new Compress();