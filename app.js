// node modules
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const app = express();
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const LocalStategy = require("passport-local").Strategy;

// passport configurations

passport.use(new LocalStategy({usernameField: 'email'},
    function (username, password, done){
        LoginModel.findOne({email: username}, async function(err, user){
            if(err){
                return done(err)
            }
            if(!user){
                return(done(null, false, {message: "Invalid email"}))
            }try {
                if(await bcrypt.compare(password, user.password)){
                    return (done (null, user))
                }else{
                    return(done(null, false, {message:"Incorrect password"}))
                }
            } catch (error) {
                return done(error)
            }
        })
    }
))
passport.serializeUser(function(user, done){
    done(null, user)
})
passport.deserializeUser(function(id, done){
    done(null, id)
})

//  middleware setup
app.use(express.static("public"))
app.use(express.urlencoded({extended: false}))
app.set("view engine", "ejs");
app.use(flash());
app.use(session({
    secret: "Secret123",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize())
app.use(passport.session())

// mongodb setup
mongoose.connect('mongodb://localhost:27017/test', 
{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Datatbase started");
}).catch(e => console.log(e))

const userSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const LoginModel = mongoose.model('login', userSchema)

// Routing

app.get("/", authenticated, (req, res)=>{
    res.render("home.ejs", {name: req.user.fname});
})

app.get("/login", notAuth, (req, res)=>{
    res.render("login.ejs")
})

app.get("/register", notAuth, (req, res)=>{
    res.render("register.ejs")
})

app.post('/register', async (req, res)=>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.passwd, 10)
        const user = new LoginModel({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: hashedPassword,
        })
        user.save()
        res.redirect("/login")
    }catch{
        res.redirect('/register')
    }
})

app.post("/login", passport.authenticate('local', {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
}))

app.post("/logout", (req, res)=>{
    req.logOut();
    res.redirect("/login")
})

app.listen(3000, ()=>{
    console.log("Server started");
})

// check authenticated

function authenticated(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/login")
}

function notAuth(req, res, next){
    if(req.isAuthenticated()){
        return res.redirect('/')
    }
    next()
}