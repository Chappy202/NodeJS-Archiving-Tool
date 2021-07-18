// Lib
const deleteFile = require('../../lib/deleteFile');

// Handlers
const Extract = require('../../handlers/extract');
const fs = require('fs');
const fileType = require('file-type');

class Extraction {

    

    initial(out, filepath) {
        const stream = fs.createWriteStream(filepath);
        const type = await fileType.fromStream(stream)

        switch (type.ext) {
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
                    console.log(`${type.ext} is not supported`);
                }
                break;
        }


        // console.log(out);
        // Extract.extractZip(out, filepath);
        // deleteFile(filepath);
    }
}

module.exports = new Extraction();