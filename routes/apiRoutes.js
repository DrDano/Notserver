const router = require('express').Router();
const NoteHelper = require('../lib/NoteHelper');

const noteHelper = new NoteHelper();

router.get('/notes', (req, res) => {
    let results = noteHelper.jsonData;

    res.json(results)
});

router.post('/notes', (req, res) => {
    noteHelper.jsonData[0] ? req.body.id = noteHelper.jsonData[noteHelper.jsonData.length - 1].id + 1 : req.body.id = 0;

    if (!noteHelper.validateJson(req.body)) {
        res.status(400).send('Please include both a note title and body text and try again.');
    } else {
        const note = noteHelper.pushNewData(req.body);
        res.json(note)
    }
})

router.delete('/notes/:id', (req, res) => {
    noteHelper.deleteData(req.params.id);
})

router.get('*', (req, res) => {
    let results = noteHelper.jsonData;

    res.json(results)
});

module.exports = router;