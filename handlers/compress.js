const adm = require('adm-zip');
const Winrar = require('winrarjs');
const Seven = require('node-7z');

export default class Delete {

    compressZip(location, target, file) {
        const zip = new adm();
        zip.addFile(file);
        zip.writeZip(target); // Has callback functionality
    }

    compressRar(location, target, file) {
        // Since the rar format is closed-source, the rar drivers need to be installed in order to use this function
        const winrar = new Winrar();
        winrar.addFile(file);
        winrar.setOutput(target);
        winrar.setConfig({
            level: process.env.RAR_COMPRESSION || 2
        });

        winrar.rar(); // Has callback functionality
    }

    compress7z(name, target, file) {
        // The 7-zip libraries and binaries will need to be installed in order for this function to work
        const stream = Seven.add(name, file, {
            recursive: true,
            outputDir: target
        })
    }
}