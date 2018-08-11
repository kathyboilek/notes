var notes = require('./notes');

var yargs = require('yargs');

/*
{
    getAll: function()
}
*/

var argv = yargs.argv;
var command = argv._[0];

if(command === 'list') {
    var allNotes = notes.getAll();
    console.log("Printing " + allNotes.length + " note(s).");
    console.log('--');
    allNotes.forEach(function(note) {
        console.log('Title: ' + note.title);
        console.log('Body: ' + note.body)
    })
} else if(command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if(command === 'delete') {
    notes.deleteNote(argv.title);
} else {
    console.log("Command not recognized");
}
