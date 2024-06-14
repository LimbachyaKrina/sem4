const expr = require("express")
const app = expr()
const sess = require('express-session')
app.use(sess({
    resave : true,
    // save session if modify or not
    saveUninitialized : true,
    // create session if it initialize or not
    secret:'Hello'
    // this is a secret key
}))
// this will create the session
app.get("/",(req,res) =>{
    if(!req.session.fname){
        req.session.fname = 'Krina'
        res.redirect("/fetchsession")
        // this won't be display this page will be ignored, only the value is stored here
    }else{
        console.log("Session is already set")
    }
})
app.get("/fetchsession", (req,res) =>{
    // res.set('Content-type','text/HTML')
    res.write(`<h1> Welcome ....${req.session.fname} </h1>`)
    res.write(`<a href="deletesession"> Delete Session </a>`)
    // but if i want to stay on this page then i have to use anchor tag
    res.send()
})
app.get("/deletesession", (req,res) =>{
    req.session.destroy()
    res.send("session destroy")
}).listen(5000)