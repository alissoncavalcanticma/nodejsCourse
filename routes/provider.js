let express = require('express')
let router = express.Router()
let p_create = require('./../controller/p_create')
let p_update = require('../controller/p_update')
let p_delete = require('./../controller/p_delete')
let p_find = require('./../controller/p_find')

// router.get('/', (req, res) => {
//     res.render('provider_list')
// })

router.get('/new', (req, res) => {
    res.render('provider_new')
})

router.post('/', p_create)
router.put('/:id', p_update)
router.delete('/:id', p_delete)
router.get('/', p_find)

router

module.exports = router