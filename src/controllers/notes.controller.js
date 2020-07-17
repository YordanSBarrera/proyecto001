const notesCtrl = {};

const Note = require('../models/note');

notesCtrl.renderNoteForm = (req, res) => {
    res.render('notas/new-nota');
};

notesCtrl.createNewNote = async (req, res) => {
    console.log('form :', req.body);
    const newNote = new Note({ title: req.body.title, description: req.body.description });
    console.log(newNote);
    await newNote.save();
    res.send('notas nota');
};

notesCtrl.renderNote = async (req, res) => {
    const notas = await Note.find();
    res.render('notas/all-notas',{notas});
    //res.send('render nota');
};
notesCtrl.renderEditForm = (req, res) => {
    res.send('render editar');
};
notesCtrl.deleteNote = (req, res) => {
    res.send('borrando notas');
};

module.exports = notesCtrl;
