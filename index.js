const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

// app.get('/', function(request, response) {
// 	response.render('index');
// });

app.use('/form_handler', bodyParser.urlencoded({
    extended: true
}))

app.post('/form_handler', function(req, res, next) {
    console.log(req.body)
})

app.listen(5000);