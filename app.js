console.log("Starting app !");

const fs = require('fs');
const os = require('os');
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const argv = yargs.argv

console.log('yargs', argv);

var command = argv._[0]
if (command == 'add') {
  note = notes.addNote(argv.title, argv.body)

  if (note != undefined) {
    console.log("New note created with title", note.title);
  } else {
    console.log("Note already exists");
  }
} else if (command == "list") {
  notes.getAll()
} else if(command == "read") {
  note = notes.getNote(argv.title)
  if(note != undefined) {
    console.log("I got a note");
    debugger
    console.log("Note title : ", note.title);
    console.log("Note Body : ", note.body);
    debugger
  } else {
    console.log("Note not found in file");
  }
} else if(command == "remove") {
  notes.removeNote(argv.title)
} else {
  console.log("command not recognised");
}
