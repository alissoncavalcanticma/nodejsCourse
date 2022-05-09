let Sequelize = require('sequelize')
let path = require('path')
let sequelize = require('../model/index')

let Cliente = require(path.join(__dirname, './../model/client'))(sequelize, Sequelize.DataTypes)

module.exports = (req, res) => {
    Cliente
        .destroy({
            where: {
                id: req.params.id
            }
        }).then(() => res.redirect('/client?msg=5'))
        .catch((err) => res.redirect('/client?msg=6'))
}