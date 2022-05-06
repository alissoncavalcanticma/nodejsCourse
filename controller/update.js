let Sequelize = require('sequelize')
let path = require('path')
let sequelize = require('./../model/index')
let Cliente = require(path.join(__dirname, './../model/client'))(sequelize, Sequelize.DataTypes)

module.exports = (req, res) => {
    Cliente
        .update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(() => console.log("Update OK!"))
}