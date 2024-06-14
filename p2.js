const expr = require('express')
const app = expr()
var student = {
    name : 'xyz',
    age : 31
}
app.get('/', (req,res) =>{
    res.set('content-type', 'text/html')
    // res.send(student) 
    // res.json(student) 
    // OR
    // res.write(JSON.stringify(student))
    // res.send()
    var name = student.name
    var age = student.age
    res.write("My name is "+ name+ " and my age is "+ age)
    res.send()
})
app.listen(5000)