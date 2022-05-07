let express = require('express')
let router = express.Router()
const create = require('./../controller/create')
const update = require('./../controller/update')
const del = require('./../controller/del')
const find = require('./../controller/find')


//router para cliente_list
// router.get('/', (req, res) => {
//     res.render('client_list')
// })

router.get('/', find)

//router para client_new
router.get('/new', (req, res) => {
    res.render('client_new')
})

//router para controller/client //insert
router.post('/', create)

//router para controller/update //update
router.put('/:id', update)

//router para controller/delete //delete
router.delete('/:id', del)

//router para controller/find //select


module.exports = router;