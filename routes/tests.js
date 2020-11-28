const express = require('express')
const router = express.Router()
const Test = require('../info')

router
    .post('/save', async (req, res) => {
        const { question, answer } = req.body
        let test = {}
        test.question = question
        test.answer = answer
        let testModel = new Test(test)
        await testModel.save()
        res.json(testModel)
    })

module.exports = router