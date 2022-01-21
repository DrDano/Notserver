const fs = require('fs');
const path = require('path');

class PostHelpers {
    constructor() {

    }

    validateJson(jsonData) {
        if (!jsonData.title || typeof jsonData.title !== 'string') {
            return false;
        }
        if (!jsonData.text || typeof jsonData.text !== 'string') {
            return false;
        }
        return true;
    }

    pushNewData(data, dbInstance, relPathToJson = '../data/db.json') {
        dbInstance.push(data);
        fs.writeFileSync(
            path.join(__dirname, relPathToJson),
            JSON.stringify({data: dbInstance}, null, 2)
        )
    }

}