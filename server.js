import express from 'express'
import mongoose from 'mongoose'
// import { send } from 'process'
import Card from './schema.js'
import cors from 'cors'

// App config
const app = express()
const port = process.env.PORT || 8000

// Middlewares
app.use(express.json())
app.use(cors())

// DB config
const connectUrl = 'mongodb+srv://admin:UmAdkRhpA36KHUEt@cluster0.odbjc.mongodb.net/testwork?retryWrites=true&w=majority'
mongoose.connect(connectUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// API endpoints
app.get('/', (req, res) => res.status(200).send('HELLO PROGGRAMMERS !!!'))

app.post('/cards', (req, res) => {
    const dbCard = req.body
    Card.create(dbCard, ( err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/cards', (req, res) => {
    Card.find( (err, data ) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})
// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`))