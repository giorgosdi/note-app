console.log("Starting app !");

const fs = require('fs');
const os = require('os');
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

const titleOpt = {
  describe: "Title of note",
  demand: true,
  alias: 't'
}

const bodyOpt = {
  describe: "Body of the note",
  demand: true,
  alias: 'b'
}
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOpt,
    body: bodyOpt
  })
  .command('read', 'Read a note', {
    title: titleOpt
  })
  .command('list', 'Lists all notes')
  .command('remove', 'Removes a note', {
    title: titleOpt
  })
  .help()
  .argv

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
  var all_notes = notes.getAll()
  console.log(`Printing ${all_notes.length} notes(s).`);
  all_notes.forEach(note => notes.logNote(note))
} else if(command == "read") {
  note = notes.getNote(argv.title)
  if(note != undefined) {
    notes.logNote(note)
  } else {
    console.log("Note not found in file");
  }
} else if(command == "remove") {
  notes.removeNote(argv.title)
} else {
  console.log("command not recognised");
}
