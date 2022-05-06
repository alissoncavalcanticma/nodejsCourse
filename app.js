// const http = require('http');

// const handle = require('./handle');

// const hello = require('console-log-hello-world');

// let server = http.createServer(handle);

// server.listen(3000, () => {
//     console.log("Servidor rodando na port 3000");
// })
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const home = require('./routes/home')
const client = require('./routes/client')
const provider = require('./routes/provider')
const app = express()
const port = 3000

//definando o path da pasta assets de modo dinamico 
app.use('/assets', express.static('./assets'))


//definindo pug como template engine
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

//app.use -> Declaração de uso em app
//declarando o body-parser para trabalhar com o retorno do post
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./model/index')

//midleware = Função executada após uma requisição definida
app.get('/midleware', (req, res, next) => {
    next(console.log("Hi Midleware"))
})


//definição/direcionamento de uso da rotas de home e client
app.use('/', home)
app.use('/client', client)
app.use('/provider', provider)


//instanciação do server na porta 3000
app.listen(port, () => console.log(`App listening http://localhost:${port}`))