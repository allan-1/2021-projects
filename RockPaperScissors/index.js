const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const port = 3000;

const app = express();
let selections = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('Public'));

app.get('/', (req, res)=>{
    res.render('game')
})
app.get('/results', (req, res)=>{
    res.render('results', {results : selections})
})

app.listen(port, ()=>{
    console.log(`Server started ar port : ${port}`)
})