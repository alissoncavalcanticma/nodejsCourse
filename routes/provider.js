let express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
    res.render('provider_list')
})

router.get('/new', (req, res) => {
    res.render('provider_new')
})

module.exports = router