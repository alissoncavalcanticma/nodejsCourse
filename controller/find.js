let Sequelize = require('sequelize')
let path = require('path')
let sequelize = require('./../model/index')

let Cliente = require(path.join(__dirname, './../model/client'))(sequelize, Sequelize.DataTypes)

module.exports = (req, res) => {
    Cliente
        .findAll()
        .then((clientes) => {
            return res.render('client_list', {
                title: "Lista de Clientes",
                clients: clientes
            })
        })
        .catch((err) => {
            console.log(err)
        })
}