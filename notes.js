console.log("Starting notes.js");
const fs = require('fs')

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync("notes-data.json")
    notes = JSON.parse(notesString);
    return notes
  } catch (err) {
    return [];
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes))
}

var addNote = (title, body) => {
  var notes = fetchNotes()
  var note = {
    title,
    body
  }


  var duplicateNotes = notes.filter((note) => note.title === title)

  if (duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  }
}

var getAll = () => {
  console.log("Getting all notes");
}

var getNote = (title) => {
  var notes = fetchNotes()
  if(notes.length > 0) {
    var read_note = notes.filter((note) => note.title === title)
    return read_note[0];
  }
}

var removeNote = (title) => {
  var notes = fetchNotes()
  if(notes.length > 0) {
    new_notes = notes.filter((note) => note.title !== title)
    saveNotes(new_notes)
    if(notes.length > new_notes.length) {
      console.log(`The note with title ${title} was removed succesfully`);
    } else {
      console.log(`Note with title \"${title}\" does not exists`);
    }
  }
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
