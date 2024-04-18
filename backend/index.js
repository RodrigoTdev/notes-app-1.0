const express = require('express')
const mongoose = require('mongoose')
const noteController = require('./controllers/noteController')
const cors = require('cors')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 3007

mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        console.log('Connected to MongoDB')
    })
    .catch((error)=>{
        console.log('Error connecting to MongoDB',error)
    })

    app.use(express.json())
    app.use(cors())
    app.use('/api', noteController)
    app.use(express.static('dist'))

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})