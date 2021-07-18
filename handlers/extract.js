const AdmZip = require('adm-zip');
const Winrar = require('winrarjs');
const Seven = require('node-7z');

class Extract {
    extractZip(output, filepath) {
        const zip = new AdmZip(filepath);
        zip.extractAllTo(output,true);
    };

    extractWinRAR(location, target, file) {
        //Reading WinRAR file
        let winrar = new Winrar();
        winrar.listFile().then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
        //Extracting to File
        winrar = new Winrar();
        winrar.setOutput(target); //where file should be saved

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
