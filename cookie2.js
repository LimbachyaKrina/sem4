 // Write a script to create a login form on index.html after clicking submit button, it should jump to next page and value of username should be stored inside cookie, perform the task using GET method observe and check the browser that cookie is stored perfectly or not
 var expr = require("express")
 const app = expr()
 const path = require("path")
 const cp = require("cookie-parser")
 app.use(cp())
 app.get("/",(req,res)=>
{
    res.sendFile(__dirname+"/index.html")
})
 app.get("/next",(req,res,next) =>{
     //var user = req.query.uname
     var password = req.query.pass
     res.cookie("user",req.query.uname)
     res.write("This is the name of the user "+ req.query.uname)
     next()
 })
app.get("/next", (req,res) => {
    res.send()
}).listen(3000)