const chalk = require('chalk');

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
                    Extract.extractZip(out,filepath);
                    deleteFile(filepath);
                }
                break;

            case 'rar':
                {
                    Extract.extractWinRAR(out, filepath).then(() => {
                        deleteFile(filepath);
                    }).catch(err => {
                        console.log(chalk.red('Something went wrong while trying to extract the rar file: ', chalk.yellow(err.message)));
                    });
                }
            break;

            case '7z':
                {
                    Extract.extract7z(out, filepath);
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