const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const testRouter = require('./routes/tests')
const cors = require('cors')
const connectDB = require('../back/bd')

connectDB()

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Tom:987654vas@cluster0-hzwhs.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/test', testRouter)

// app.use('/api/testModule', require('../back/routes/tests'))

app.listen(5000);