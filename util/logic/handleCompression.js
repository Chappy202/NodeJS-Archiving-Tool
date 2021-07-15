// Handlers
const Compress = require('../../handlers/compress');

class Compression {
    initial(path, type, amount = 'Multiple') {
        switch (type) {
            case 'file':
                console.log('File Compress')
                break;
            case 'folder':
                console.log('Folder Compress')
                break;
            default:
                break;
        }
        console.log(path, null, ' ');
    }
}

module.exports = new Compression();