import AdmZip from 'adm-zip';

const adm = require('adm-zip');
const Winrar = require('winrarjs');
const Seven = require('node-7z');
export default class Delete {
    extractZip(location, target, file) {
        const zip = new AdmZip();
        zip.extractAllTo(target,true);//IDK WHAT NEEEDS TO BE HERE LMAO
    };

    extractWinRAR(location, target, file) {
        //Reading WinRAR file
        const winrar = new Winrar();
        winrar.listFile().then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
        //Extracting to File
        const winrar = new Winrar();
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