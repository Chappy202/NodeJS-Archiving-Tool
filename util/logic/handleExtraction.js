// Lib
const deleteFile = require('../../lib/deleteFile');

// Handlers
const Extract = require('../../handlers/extract');

class Extraction {
    initial(out, filepath) {
        Extract.extractZip(out, filepath);
        deleteFile(filepath);
    }
}

module.exports = new Extraction();