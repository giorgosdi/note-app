// var obj  = {
//   name: 'Anrew'
// };
// var stringObj = JSON.stringify(obj)
// console.log(typeof stringObj);
// console.log(stringObj);

const fs = require('fs')

var originalNote = {
  title: 'The best title',
  body: 'The best body'
}

originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync("notes.json", originalNoteString)

var noteString = fs.readFileSync("notes.json")
note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
