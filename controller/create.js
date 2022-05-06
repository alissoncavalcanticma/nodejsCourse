let Sequelize = require('sequelize')
let path = require('path')
let sequelize = require('./../model/index')

const Cliente = require(path.join(__dirname, './../model/client'))(sequelize, Sequelize.DataTypes)
    //let Cliente = sequelize.import('./../model/client') //Import não funcionou

module.exports = (req, res) => {
    Cliente
        .create(req.body)
        .then(() => console.log('INSERT OK'))
}