var fs = require('fs');

function saveNotes(notes) {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}
function addNote(title, body) {
    var notes = getAll();
    var note = {
        title: title,
        body: body
    };
    var duplicateNotes = notes.filter(function(note) {
        return note.title === title
    });
    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
    }
}

function deleteNote(title) {
    var notes = getAll();
    var filteredNotes = notes.filter(function(note) {
        return note.title !== title
    });
    saveNotes(filteredNotes);
}

function getAll() {
    try {
        var notes = fs.readFileSync('notes-data.json');
        return JSON.parse(notes);
    } catch(e) {
        return [];
    }
}

module.exports = {
    addNote,
    getAll,
    deleteNote
}