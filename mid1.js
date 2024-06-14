const expr = require("express")
const app = expr()
app.get("/hello",(req,res,next) => {
    res.write("Request received on "+ new Date())
    next()
})
app.get("/hello",(req,res,next) => {
    console.log("Hello1")
    next()
})
app.get("/hello",(req,res,) => {
    res.send()
}).listen(5000)