const AdmZip = require('adm-zip');
const Winrar = require('winrarjs');
const Seven = require('node-7z');
const path = require('path');

class Extract {
    extractZip(output, filepath) {
        const zip = new AdmZip(filepath);
        zip.extractAllTo(output + path.basename(filepath).replace(/\.[^/.]+$/, ""),true);
    };

    extractWinRAR(output, filepath) {
        let winrar = new Winrar(filepath);
        winrar.setOutput(output); //where file should be saved

        winrar.setConfig({
            deleteAfter: true,
            keepBroken: true
        })

        winrar.unrar().then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        })
    };

    extract7z(name, target, file) {
        const stream = Seven.extractFull(name, file, {
            recursive: true,
            outputDir: target
          })
    };
}

module.exports = new Extract();
