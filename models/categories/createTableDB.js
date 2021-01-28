const sequelize = require('sequelize')
const connection = require('../../config/connectionDB')

const Category = connection.define('category', {
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
