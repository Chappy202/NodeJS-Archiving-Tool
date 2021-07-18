// Lib
const deleteFile = require('../../lib/deleteFile');

// Handlers
const Extract = require('../../handlers/extract');
const path = require('path');

class Extraction {
    async initial(out, filepath) {
        let _type = path.basename(filepath).split(".")[1];
        switch (_type) {
            case 'zip':
                {
                    Extract.extractZip(out,filepath)
                }
                break;

            case 'rar':
                {
                    console.log("Winrar Version");
                }
            break;

            case '7z':
                {
                    console.log("7Z Version");
                }
            break;
        
            default:
                {
                    console.log(`${_type} is not supported`);
                }
                break;
        }
    }
}

module.exports = new Extraction();