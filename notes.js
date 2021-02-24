const fs = require('fs');
const { title } = require('process');

function getNotes(note) {


}

function addNotes(title, body) {
    const notes = loadNotes();
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
}

function saveNotes(notes) {
    const dataJson = JSON.stringify(notes);
    const duplicateNote = notes.filter(function(note) {
        return note.title === title
    })
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('Yeni not eklendi');
    } else {
        console.log('Not başlığı zaten girilmiş');
    }
}

fs.writeFileSync('notes.json', dataJson);

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

module.exports = { getNotes: getNotes, addNotes: addNotes };