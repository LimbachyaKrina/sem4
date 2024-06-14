const expr = require("express")
const router = expr.Router()
const manager = [{id : 101, name : "Krina",id : 5},
    {id : 201, name : "Mihikha", rating : 3}
]
router.get("/", (req,res) =>{
    res.json(manager)
})
module.exports = router