const sequelize = require('sequelize')
const connection = require('../../config/connectionDB')

const Articles = connection.define('articles', {
    title: {
        type: sequelize.STRING,
        allowNull: false,
    },
    slug: {
        type: sequelize.STRING,
        allowNull: false,
    },
    category: {
        type: sequelize.STRING,
        allowNull: false,
    },
})

module.exports = Articles
