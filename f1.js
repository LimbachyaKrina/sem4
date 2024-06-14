// Write express js script to request server to display json object which is array of object in table form on browser
var student = {'name' :['xyz','pqr','mnc'],'age':[1,2,3]}
const expr = require('express')
const app = expr()
app.get('/', (req,res) =>{
    res.set('content-type', 'text/html')
    var temp = "<table border='2px solid black'>"
    temp += "<tr>"
    for(i in student)
        {
            temp+="<th>"
            temp+=i
            temp+="</th>"
        }
    temp += "</tr>"
    temp += "<tr>"
    for(i = 0; i < student.name.length; i ++){
        temp += "<tr>"
        temp += "<td>" + student.name[i]
        temp += "</td>"
        temp += "<td>" + student.age[i]
        temp += "</td>"
        temp += "</tr>"
    }
    temp += "</table>"
    res.write(temp)
    res.send()
})
app.listen(5000)