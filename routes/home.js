const { response } = require('express')
let express = require('express')
let router = express.Router()


router.get('/', (req, res) => {
    //res.send('Welcome to a Homepage')
    res.render('home', //{message: "Hello Alisson"}
    )
})

router.get('/Contacts', (req, res) => {
    res.send(`Contacs page`);
})

router.get('/reqs/:name/:lastname', (req, res) => {
    console.log(req.params.name + " " + req.params.lastname);
    res.send(`Nome: ${req.params.name}, Sobrenome é: ${req.params.lastname}`)
})

router.post('/body', (req, res) => {
    res.json(req.body)
    console.log(res.json(req.body.lastname))
})

router.get('/response', (req, res) => {
    // res.status(200).json([
    //     { name: 'Chistian' },
    //     { name: 'Fabiana' },
    //     { name: 'Alisson' }
    // ])
    res.render('index', {
        title: 'This is title'
    })
})


module.exports = router