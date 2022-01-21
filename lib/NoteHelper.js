const fs = require('fs');
const path = require('path');
const notes = require('../data/db.json')

class NoteHelper {
    constructor() {
        this.jsonData = notes || {};
        this.filePath = '../data/db.json'
    }

    validateJson(data) {
        if (!data.title || typeof data.title !== 'string') {
            return false;
        }
        if (!data.text || typeof data.text !== 'string') {
            return false;
        }
        return true;
    }

    pushNewData(data) {
        this.jsonData.push(data);
        let dataInstance = this.jsonData;
        fs.writeFileSync(
            path.join(__dirname, this.filePath),
            JSON.stringify({dataInstance}, null, 2)
        )
    }

}

module.exports = NoteHelper;