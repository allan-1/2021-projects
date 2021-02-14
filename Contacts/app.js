const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express()
const port = 3000;

mongoose.connect('mongodb://localhost:27017/contact', {useNewUrlParser: true, useUnifiedTopology: true})

const contactSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, 'Contact Must have a first name']
    },
    Lname: String,
    email: String,
    tel: Number
})

const Contact = new mongoose.model('Contact', contactSchema);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('Public'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            console.log(err);
        } else {
            console.log(contact)
            res.render('index', {phone: contact });
        }
    })
})

app.post('/contact', (req, res) => {
    const Fname = req.body.Fname
    const Lname = req.body.Lname
    const email = req.body.email
    const tel = req.body.telephone;
    const data = new Contact({
        fname: Fname,
        Lname: Lname,
        email: email,
        tel: tel
    })
    data.save()
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`server started on port: ${port}`)
})