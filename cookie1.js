const expr = require("express")
const app = expr()
const cp = require("cookie-parser")
app.use(cp())
app.get("/",(req,res,next) =>{
    // res.cookie("fname",'XYZ')
    // res.cookie('lname','pqr',{expires : new Date(Date.now() + 5000)})
    // res.cookie("lname",'PQR')
    var obj = {"name":"Krina", "Address":'sarovar'}
  //  res.write("Hiiii")
    for(var i in obj){
        res.write(`${obj.i}`)
        res.cookie("c1",obj.i)
    }
   
    next()
})
app.get("/", (req,res) => {
    res.send()
}).listen(3000)