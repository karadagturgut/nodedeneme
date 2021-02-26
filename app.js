const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes');
yargs.command({
    command: 'add',
    describe: "Adds note.",
    builder: {
        title: {
            describe: "That's your note title. It should be string",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "That's your note's body. It should be string too.",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        notes.addNotes(argv.title, argv.body)
    }
});
yargs.command({
    command: "remove",
    describe: "Removes your note.",
    builder: {
        title: {
            describe: "Title of the note you want to delete.",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        notes.deleteNote(argv.title)
    }
});
yargs.command({
    command: "list",
    describe: "Lists notes.",
    handler: function() {
        console.log("Notes listed.")
    }
});
yargs.command({
    command: "read",
    describe: "Reads notes.",
    handler: function() {
        console.log("ribbit");
    }
});

var deneme = yargs.argv[0];