const path = require('path');
const router = require('express').Router();
const { notes } = require('../data/db.json')
const PostHelper = require('../lib/postHelpers');

const notePostHandler = new PostHelper();

router.get('/notes', (req, res) => {
    let results = notes;

    res.json(results)
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if (!notePostHandler.validateJson(req.body)) {
        res.status(400).send('Please include both a note title and body text and try again.');
    } else {
        const note = notePostHandler.createNewData(req.body, notes);
        res.json(note)
    }
})

module.exports = router;