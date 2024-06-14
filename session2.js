// Write express script to print how much time user visit the page. Eg. if user visit first time you have visited 1st time and so on
const expr = require("express")
const app = expr()
const sess = require("express-session")
app.use(sess({secret:"Hello"}))
app.get("/",(req,res) =>{
    if(req.session.page_views){
        req.session.page_views++
        res.send(`<h1> You have visited page ${req.session.page_views} + times </h1>`)
    }else{
        req.session.page_views = 1
        res.send(`<h1> Welcome ... You have visited page ${req.session.page_views} times`)
    }
}).listen(3000)