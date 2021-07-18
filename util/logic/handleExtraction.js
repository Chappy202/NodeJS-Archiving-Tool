// Lib
const deleteFile = require('../../lib/deleteFile');

// Handlers
const Extract = require('../../handlers/extract');

class Extraction {
    initial(out, filepath) {
        console.log(out);
        Extract.extractZip(out, filepath);
        deleteFile(filepath);
    }
}

module.exports = new Extraction();