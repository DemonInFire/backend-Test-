const mongoose = require('mongoose')

const test = new mongoose.Schema({
    question:{
        type:String
    },
    answer:{
        type:String
    }
})

module.exports = Test = mongoose.model('test',test)