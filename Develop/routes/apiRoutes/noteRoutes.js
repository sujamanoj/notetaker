const router = require('express').Router();
const path = require('path');

const { notes } = require('../../db/db.json');
const { createNewNote, validateNote, findById, removeNote } = require('../../lib/notes');
const uuid = require('../../helpers/uuid');

router.get('/api/notes', (req, res) => {
    res.json(notes);
})

router.post('/api/notes', (req, res) => {
    req.body.id = uuid();

    if(!validateNote(req.body)) {
        res.status(400).send("The note is not properly formatted. ");
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    };
});

router.delete('/api/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        removeNote(result, notes);
        res.sendFile(path.join(__dirname, '../../public/notes.html'));
    } else {
        res.status(400).send("There has been an error with the attempt to delete this note. ");
    };
});

module.exports = router;