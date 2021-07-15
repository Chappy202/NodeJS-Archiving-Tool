// Handlers
const Compress = require('../../handlers/compress');

class Compression {
    initial(path) {
        console.log('Initial')
        console.log(path, null, ' ');
    }
}

module.exports = new Compression();