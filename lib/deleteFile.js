const fs = require('fs');

module.exports = (file) => {
    try {
        fs.unlinkSync(file);
    } catch (err) {
        console.log(err);
    }
}