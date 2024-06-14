var expr = require('express')
var app = expr()
app.get("/", function(req,res){
    res.write('Hello World')
    // send should be used only and if there is any arg then pass through it, it means display whatever it is written in it and
    // then close the server.
    res.send()
})
app.get("/about", function(req,res){
    res.write("this is about page")
    res.send()
})
app.get("*", function(req,res){
    res.status(404)
    res.write("Page not found")
    res.send()
})

app.listen(5000,()=>{
    console.log("Server Start")
})