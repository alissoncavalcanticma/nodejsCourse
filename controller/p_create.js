let Sequelize = require('sequelize')
let path = require('path')
let sequelize = require('./../model/index') //conexão

const Provider = require(path.join(__dirname, './../model/provider'))(sequelize, Sequelize.DataTypes)

module.exports = (req, res) => {
    Provider
        .create(req.body)
        .then(() => console.log('Provider Create OK!'))
}