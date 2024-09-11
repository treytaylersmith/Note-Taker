const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile, writeToFile } = require('../helpers/fsUtils');

notes.get('/', (req,res) =>{
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
});

notes.post('/', (req,res) =>{
    const {title, content } = req.body;

    if(title && content){
        const newNote = {
            title,
            content,
            note_id: uuidv4(),
        };

        readAndAppend(content, './db/db.json');

        const response = {
            satus: 'success',
            body: newNote,
        };

        res.json(response);

    }
    else{
        res.json('Error in posting note');
    }

});

notes.delete('/:note_id', (req,res) =>{
    const noteId = req.params.note_id;
    readFromFile('./db/db.json')
        .then((data) => json.parse(data))
        .then((json) => {
            const result =  json.filter((note) => note.note_id !== noteId);

            writeToFile('./db/db.json', result);

            res.json(`Note ${noteId} has been deleted`);

        });
})
module.exports = notes;