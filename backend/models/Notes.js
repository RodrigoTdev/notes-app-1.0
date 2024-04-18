const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    note: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: '#0C635D'
    }
    
})

module.exports = mongoose.model('Note', noteSchema)