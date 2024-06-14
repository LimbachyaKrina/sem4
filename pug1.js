// const expr = require("express")
// const app = expr()
// app.set('view engine', 'pug')
// // this is my template engine, pug, ejs etc. are different kind of view engines
// app.set('views', __dirname)
// // views is a folder in which it search pug file
// app.get("/", (req,res) =>{
//     res.render("form")
//     // if i want to render a template then i have to use render function 
// }).listen(3000)
const expr = require("express")
const app = expr()
app.set('view engine', 'pug')
app.set('views', __dirname)
app.get("/", (req,res) =>{
    res.render('datainp')
  
})
app.get("/student", (req,res) =>{
    var uname = req.query.uname
    var mail = req.query.mail
    var course = req.query.course
    res.render('student', {Name : uname, Email : mail , Course : course})
}).listen(3000)


