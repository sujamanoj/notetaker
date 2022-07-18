const fs = require("fs");
const path = require("path");

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);

  fs.writeFileSync(
    "./db/db.json",
    JSON.stringify({ notes: notesArray }, null, 2)
  );

  return note;
}

function validateNote(note) {
  if (!note.title || typeof note.text !== "string") {
    return false;
  }
  if (!note.text || typeof note.text !== "string") {
    return false;
  }
  if (!note.id || typeof note.id !== "string") {
    return false;
  }
  return true;
}

function findById(id, notesArray) {
  const result = notesArray.filter((note) => note.id === id)[0];
  return result;
}

function removeNote(result, notesArray) {
  const indexOfObj = notesArray.map((object) => object.id).indexOf(result.id);

  notesArray.splice(indexOfObj, 1);
  fs.writeFileSync(
    "./db/db.json",
    JSON.stringify({ notes: notesArray }, null, 2)
  );
}

module.exports = { createNewNote, validateNote, findById, removeNote };
