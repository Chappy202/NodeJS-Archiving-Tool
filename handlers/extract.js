const AdmZip = require('adm-zip');
const Winrar = require('winrarjs');
const Seven = require('node-7z');
const sevenBin = require('7zip-bin');
const path = require('path');
const chalk = require('chalk');
const deleteFile = require('../lib/deleteFile');

class Extract {
    extractZip(output, filepath) {
        const zip = new AdmZip(filepath);
        zip.extractAllTo(output + path.basename(filepath).replace(/\.[^/.]+$/, ""),true);
    };

    extractWinRAR(output, filepath) {
        let winrar = new Winrar(filepath);
        winrar.isRarInstalled(false);
        winrar.setOutput(output); //where file should be saved

        return winrar.unrar();
    };

    extract7z(output, filepath) {
        const stream = Seven.extractFull(filepath, output + path.basename(filepath).replace(/\.[^/.]+$/, ""), {
            $progress: true,
            $bin: sevenBin.path7za
          });

        stream.on('end', () => {
            deleteFile(filepath);
        })

        stream.on('error', (err) => {
            console.log(chalk.red('Something went wrong while trying to extract 7-zip file:', chalk.yellow(err.message)))
        });
    };
}

module.exports = new Extract();
