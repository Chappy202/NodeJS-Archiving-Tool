const fs = require('fs-extra');

module.exports = (oldPath, newPath) => {
    return fs.move(oldPath, newPath);
}