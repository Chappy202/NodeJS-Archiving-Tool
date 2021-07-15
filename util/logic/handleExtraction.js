// Handlers
const Extract = require('../../handlers/extract');

class Extraction {
    initial(path) {
        console.log('Initial')
        console.log(path, null, ' ');
    }
}

module.exports = new Extraction();