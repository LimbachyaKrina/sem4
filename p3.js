var expr = require("express")
var app = expr()
app.get("/id/:id", function(req,res){
    // : this means that i have made a parameter and then it's value is passed in the url
    res.send("The id you specified is "+ req.params.id)
})
app.get("/:n/name/:name", function(req,res){
    // : this means that i have made a parameter and then it's value is passed in the url
    res.send("The id you specified is "+ req.params.name+ " "+ req.params.n )
})
app.listen(3000)