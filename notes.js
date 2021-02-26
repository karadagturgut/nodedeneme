const fs = require('fs');
const { title } = require('process');

function getNotes(note) {


}

function addNotes(title, body) {
    const notes = loadNotes();
    const duplicateNote = notes.filter(function(note) {
        return note.title === title
    })
    if (duplicateNote.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        console.log('New note added');
        saveNotes(notes)
    } else {
        console.log('That title you have write already taken. ');
    }

}

function saveNotes(notes) {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson)

}

function loadNotes() {
    try {
        const data = fs.readFileSync('notes.json');
        const dataJson = data.toString();
        return JSON.parse(dataJson);
    } catch (error) {
        return []
    }
}

function deleteNote(title) {

    try {
        const data = loadNotes();
        const filter = data.filter(function(note) {
            return note.title !== title
        })
        if (condition) {


        }
        saveNotes(filter)
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getNotes: getNotes, addNotes: addNotes, deleteNote: deleteNote };