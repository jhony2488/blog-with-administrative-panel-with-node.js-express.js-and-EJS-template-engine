const Sequelize = require('sequelize')

const connect = new Sequelize('blog', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = connect
