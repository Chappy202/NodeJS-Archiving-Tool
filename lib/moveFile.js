const fs = require('fs');

module.exports = (oldPath, newPath) => {
    fs.rename(oldPath, newPath, (err) => {
        if (err.code === 'EXDEV') {
            copy();
        } else {
            return err;
        }
        return;
    });

    function copy() {
        let readStream = fs.createReadStream(oldPath);
        let writeStream = fs.createWriteStream(newPath);

        readStream.on('error', (err) => err);
        writeStream.on('error', (err) => err);

        readStream.on('close', () => {
            fs.unlink(oldPath);
        });

        readStream.pipe(writeStream);
    }
}