const sequelize = require('sequelize')
const connection = require('../Connection')

const Category = connection.define('categorys', {
    title: {
        type: sequelize.STRING,
        allowNull: false,
    },
    slug: {
        type: sequelize.STRING,
        allowNull: false,
    },
})

module.exports = Category
