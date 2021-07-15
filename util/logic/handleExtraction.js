// Handlers
const Extract = require('../../handlers/extract');

class Extraction {
    initial(path, type, amount = 'Multiple') {
        switch (type) {
            case 'file':
                console.log('File Extract');
                break;
            case 'folder':
                console.log('Folder Extract');
                break;
            default:
                break;
        }
        console.log('Initial')
        console.log(path, null, ' ');
    }
}

module.exports = new Extraction();