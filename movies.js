const expr = require("express")
const router = expr.Router()
const movie = [{id : 101, name : "abc", year : 1999, rating : 81},
    {id : 201, name : "xyz", year : 2000, rating : 91}
]
// router.get("/", (req,res) =>{
//     res.json(movie)
// })
// module.exports = router
router.get("/:id([0-9]{3,})", (req,res) =>{
    var currmovie = movie.filter((m) =>{
        if(m.id == req.params.id){
            return true
            // filter and map both return array
        }
    })
    if(currmovie.length == 1){
        res.json(currmovie[0])
    }else{
        res.json("Message not found")
    }
})
module.exports = router

