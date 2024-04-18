const express = require('express')
const router = express.Router()
const Note = require('../models/Notes')

// Get all notes
router.get('/notes', async (req,res) => {
    try {
        const notes = await Note.find().select('-__v')
        res.json(notes)
    } catch (error) {
        res.status(500).json({error: 'Internal server error'})
    }
})

router.post('/notes', async (req,res) => {
    try {
        const note = new Note({
            note: req.body.note,
            color: req.body.color
        })

        await note.save()

        res.status(201).send({message: "Note added successfully"})
    } catch (error) {
        res.status(500).send({error: error.messase})
    }
})

router.delete('/notes/:id', async (req,res) => {
    try {
        const noteId = req.params.id

        const deleteNote = await Note.findByIdAndDelete(noteId)
        
        !deleteNote ? res.status(404).send({message: 'Note not found'}) : res.send({message:'Note deleted successfully'})
    } catch (error) {
        res.status(500).send({error: error.message})
    }
})

router.patch('/notes/:id', async (req,res) => {
    const {note, color} = req.body
    const noteId = req.params.id

    const updatedNote = {_id: noteId, note, color}
    const updateNote = await Note.findByIdAndUpdate(noteId, updatedNote)

    try {
        if(!updateNote){
        res.status(404).send({message: 'Note not found'})}
        res.send({message: 'Note updated successfully'})


    } catch (error) {
        res.status(500).send({error: error.message})
    }

})

module.exports = router