const sequelize = require('sequelize')
const connection = require('../Connection')

const Article = connection.define('articles', {
    title: {
        type: sequelize.STRING,
        allowNull: false,
    },
    slug: {
        type: sequelize.STRING,
        allowNull: false,
    },
    body: {
        type: sequelize.TEXT,
        allowNull: false,
    },
})

module.exports = Article
