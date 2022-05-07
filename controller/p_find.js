let Sequelize = require('sequelize')
let path = require('path')
let sequelize = require('./../model/index')

let Provider = require(path.join(__dirname, './../model/provider'))(sequelize, Sequelize.DataTypes)

module.exports = (req, res) => {
    Provider
        .findAll()
        .then((providers) => console.log(providers))
}